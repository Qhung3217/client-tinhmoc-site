module.exports = {
  apps: [
    {
      name: 'client-tinhmoc',
      script: 'serve out -p 5824',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
