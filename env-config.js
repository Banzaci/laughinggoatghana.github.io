const prod = process.env.NODE_ENV === 'production'

module.exports = {   'process.env.BACKEND_URL': prod? 'https://laughinggoatghana.com' : 'https://localhost:8080' }
