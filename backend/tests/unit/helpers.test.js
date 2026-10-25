const { formatDuration } = require('../../src/utils/helpers');

describe('Helper Functions Unit Tests', () => {
  test('formats seconds to mm:ss format correctly', () => {
    expect(formatDuration(125)).toBe('2:05');
    expect(formatDuration(60)).toBe('1:00');
    expect(formatDuration(5)).toBe('0:05');
  });
});
