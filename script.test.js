const { getRandomColor } = require('./script');

describe('getRandomColor', () => {
  test('returns a valid hex color', () => {
    const color = getRandomColor();
    expect(color).toMatch(/^#[0-9A-F]{6}$/);
  });
});