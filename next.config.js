module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/{reponame}' : '',
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
