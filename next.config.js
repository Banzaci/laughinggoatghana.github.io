// const webpack = require('webpack')
const isProd = process.env.NODE_ENV === 'production'
const assetPrefix = isProd ? '/laughinggoatghana.github.io' : ''
module.exports = {
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: 'scoped'
          }
        }
      ]
    });
    return config
  },
  assetPrefix: isProd ? assetPrefix : '',
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': {page:'/'},
      '/rooms': {page:'/rooms'},
      '/tours': {page:'/tours'},
      '/surfing': {page:'/surfing'},
      '/food': {page:'/food'},
      '/contact': {page:'/contact'},
    }
  }
}
