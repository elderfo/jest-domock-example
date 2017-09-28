import { getCategories } from './data';

describe('getCategories', () => {
  it('should return expected data from server', async () => {
    const categories = await getCategories();
    expect(categories).toEqual([
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
      { id: 3, name: 'Category 3' },
      { id: 4, name: 'Category 4' },
    ]);
  });
});
