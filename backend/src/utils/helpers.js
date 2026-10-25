const formatDuration = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

const generateId = (prefix = 'aud') => {
  return `${prefix}_${Math.random().toString(36).substr(2, 9)}`;
};

module.exports = { formatDuration, generateId };
