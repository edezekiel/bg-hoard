import { formatRating } from './store-util-formatters';

describe('formatRating', () => {
  it('should work', () => {
    expect(formatRating(.5)).toEqual('5 / 10');
  });
});
