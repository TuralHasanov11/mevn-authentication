const allowedOrigins = require('../config/allowed_origins')

const credentials = (req, res, next) => {
  const origin = req.headers.origins

  if(allowedOrigins.includes(origin)){
    res.header('Access-Control-Allow-Origin', true)
  }

  next()
}

module.exports = credentials