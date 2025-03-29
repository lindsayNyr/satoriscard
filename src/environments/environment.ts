export const environment = {
  production: false,
  api: {
    protocol: 'https',
    host: 'randomuser.me',
    endpoints: {
      user: '/api/?results=1',
      users: '/api/?results=10',
    },
  },
};
