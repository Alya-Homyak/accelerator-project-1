module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-url': {
      url: (asset) => {
        if (asset.url.startsWith('/__spritemap')) {
          return asset.url.replace(/^\//, '../');
        }
        return asset.url;
      },
    }
  },
};
