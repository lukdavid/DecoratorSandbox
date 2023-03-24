import { createClient } from "redis";

const redisHost = "127.0.0.1";
const redisPort = 6379;
const redisEndpoint = `redis://${redisHost}:${redisPort}`;

const client = createClient({ url: redisEndpoint });

export default client;
