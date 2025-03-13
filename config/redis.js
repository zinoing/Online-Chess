const redis = require("redis");
const dotenv = require("dotenv");

dotenv.config();

const host = process.env.REDIS_HOST || "localhost";

const redisClient = redis.createClient({port:process.env.REDIS_PORT, host});

redisClient.on("error", (err) => {
    console.error(err.message);
    process.exit(1);
})

redisClient.on("connect", () => {
    console.log("Connected to Redis...")
});

redisClient.connect().then();

module.exports = redisClient;