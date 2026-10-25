const { createClient } = require('redis');

let redisClient = null;

const getRedisClient = async () => {
  if (redisClient) return redisClient;

  try {
    redisClient = createClient({
      url: process.env.REDIS_URL || 'redis://localhost:6379',
    });

    redisClient.on('error', (err) => console.warn('[Redis Warning]', err.message));
    await redisClient.connect();
    console.log('[Redis] Connected successfully');
    return redisClient;
  } catch (error) {
    console.warn('[Redis] Connection bypassed. Memory fallback enabled.');
    return null;
  }
};

module.exports = { getRedisClient };
