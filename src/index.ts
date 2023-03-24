import Laclass from "./laclass";
import cache from "./redis";

const main = async () => {
  await cache.connect();
  const lc = new Laclass();
  const str = "Hello World kikoo";
  const reversed = await lc.getReverse(str);
  console.log(reversed);
  return;
};

main();
