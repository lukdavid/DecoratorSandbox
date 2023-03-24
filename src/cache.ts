import { readFile, writeFile } from "fs/promises";

export class Cache {
  rootPath: string;

  constructor(rootPath: string) {
    this.rootPath = rootPath;
  }

  async get(key: string): Promise<string | null> {
    const path = `${this.rootPath}/${key}`;
    try {
      const file = await readFile(path, "utf-8");
      return file;
    } catch (e) {
      return null;
    }
  }

  async set(key: string, value: string): Promise<void> {
    const path = `${this.rootPath}/${key}`;
    return writeFile(path, value);
  }
}

export default new Cache("./.cache");
