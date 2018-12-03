const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  assetPrefix: isProd ? 'https://laughinggoatghana.com' : '',
  'process.env.BACKEND_URL': isProd ? 'https://laughinggoatghana.com' : '',
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
