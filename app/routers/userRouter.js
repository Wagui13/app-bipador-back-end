const express = require('express')
const userController = require('../controllers/userController')
const produtoController = require('../controllers/produtoController')
const router = express.Router()

router.get('/produtos', produtoController.index)
router.get('/produto/:id', produtoController.show)
router.post('/produto/:produto', produtoController.store)

router.get('/users', userController.index)
router.post('/users', userController.store)
router.get('/users/:id', userController.show)

module.exports = router
