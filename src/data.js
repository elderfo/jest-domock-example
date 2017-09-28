import fetch from 'node-fetch';

const normalize = json => {
  return json.categories.map(category => {
    return {
      id: category.catId,
      name: category.catName,
    };
  });
};

export const getCategories = async () => {
  const response = await fetch(
    'http://mockbin.org/bin/0535d3fb-74f6-43a6-b4d4-461d84795be4',
    {
      method: 'GET',
      headers: { accept: 'application/json' },
    }
  );

  const json = await response.json();

  return normalize(json);
};
