const memoryCache = new Map();

const cache = {
  get: async (key) => {
    const cached = memoryCache.get(key);
    if (!cached) return null;
    if (Date.now() > cached.expiry) {
      memoryCache.delete(key);
      return null;
    }
    return cached.value;
  },
  set: async (key, value, ttlSeconds = 300) => {
    memoryCache.set(key, {
      value,
      expiry: Date.now() + ttlSeconds * 1000,
    });
  },
  del: async (key) => {
    memoryCache.delete(key);
  },
};

module.exports = cache;
