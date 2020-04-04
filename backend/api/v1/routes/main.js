module.exports = (router) => {

	var mainController = require('../controllers/mainController')
	// const utils = require('../controllers/utils')
	// var main = "/main"

	// router.get(main+'/path/:param', utils.middleWare, main.finalController)

	router.get('/', mainController.home)
	router.put('/user',mainController.createUser)
	router.post('/validUserName',mainController.validateUsername)
	router.post('/user',mainController.fetchUser)
	router.post('/book',mainController.storeBook)
	router.get('/book',mainController.fetchBook)
	router.get('/image',mainController.fetchImage)
}