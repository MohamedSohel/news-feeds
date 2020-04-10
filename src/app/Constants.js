export const Const = {
  url: ' https://api.rss2json.com',
  version: 'v1',
  getUrl: () => `${Const.url}/${Const.version}`,
  categories: [
    {
      id: 1,
      name: 'Sports',
    },
    {
      id: 2,
      name: 'Education',
    },
    {
      id: 3,
      name: 'Business',
    },
  ],
};
