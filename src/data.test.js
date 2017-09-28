import fetch from 'node-fetch';

import { getCategories } from './data';

beforeEach(() => {
  // Reset the modules back to their original state.
  // In this case, we are setting `node-fetch` back
  // to the original, unmocked version
  jest.resetModules();
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

    // Here we are telling jest to mock `node-fetch` with the
    // specified factory method. The factory method creates
    // a mock function, which returns the same implementation
    // as when the files were separate
    jest.doMock('node-fetch', () => {
      return jest.fn(async () => {
        return { json: async () => mockResponse };
      });
    });

    // We now have to re-import the module we are testing
    const data = require('./data');

    // Make the call to the newly imported module
    const categories = await data.getCategories();

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

    // Here we are telling jest to mock `node-fetch` with the
    // specified factory method. The factory method creates
    // a mock function, which returns the same implementation
    // as when the files were separate
    jest.doMock('node-fetch', () => {
      return jest.fn(async () => {
        return { json: async () => mockResponse };
      });
    });

    // We now have to re-import the module we are testing
    const data = require('./data');

    // Make the call to the newly imported module
    const categories = await data.getCategories();

    expect(categories).toEqual([
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
      { id: 3, name: 'Category 3' },
      { id: 4, name: 'Category 4' },
    ]);
  });
});
