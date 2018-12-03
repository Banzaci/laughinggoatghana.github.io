const isProd = process.env.NODE_ENV === 'production'
const assetPrefix = isProd ? '/laughinggoatghana.github.io' : ''
const webpack = require('webpack')
module.exports = {
  assetPrefix: isProd ? assetPrefix : '',
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      }),
    )
    return config
  },
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
