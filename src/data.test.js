import fetch from 'node-fetch';

import { getCategories } from './data';

jest.mock('node-fetch');

beforeEach(() => {
  jest.resetAllMocks();
});

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

  it('should return expected mock data', async () => {
    const mockResponse = {
      categories: [
        { catId: 1, catName: 'Category 1' },
        { catId: 2, catName: 'Category 2' },
        { catId: 3, catName: 'Category 3' },
        { catId: 4, catName: 'Category 4' },
      ],
    };

    fetch.mockImplementation(() =>
      Promise.resolve({ json: () => Promise.resolve(mockResponse) })
    );

    const categories = await getCategories();
    expect(categories).toEqual([
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
      { id: 3, name: 'Category 3' },
      { id: 4, name: 'Category 4' },
    ]);
  });
});
