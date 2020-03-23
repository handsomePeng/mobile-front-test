const middleware = {}

middleware['checkUserIsLogin'] = require('..\\middleware\\checkUserIsLogin.js')
middleware['checkUserIsLogin'] = middleware['checkUserIsLogin'].default || middleware['checkUserIsLogin']

middleware['getIOS'] = require('..\\middleware\\getIOS.js')
middleware['getIOS'] = middleware['getIOS'].default || middleware['getIOS']

export default middleware
