import cache from "./redis";

class Laclass {
  constructor() {
    console.log("New laclass instance created");
  }

  @WithCache
  async getReverse(str: string): Promise<string> {
    return str.split("").reverse().join("");
  }
}

export default Laclass;

function WithCache(
  target: any,
  methodKey: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value;
  descriptor.value = async function (...args: any[]) {
    const key = `${methodKey}-${args.join("-")}`;
    const cached = await cache.get(key);

    if (cached) {
      console.log("Returning cached value");
      return cached;
    } else {
      console.log("No cache, calling original function");
      const result = await original.apply(this, args);
      await cache.set(key, result);
      return result;
    }
  };

  return descriptor;
}
