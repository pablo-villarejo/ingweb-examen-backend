const express = require('express')
const router = express.Router()

const placeholderController = require('../controllers/placeholderController')

router.get('/', placeholderController.getAllPlaceholders)
router.post('/', placeholderController.createPlaceholder)



router.get('/:id', placeholderController.getPlaceholder)
router.put('/:id', placeholderController.updatePlaceholder)
router.delete('/:id', placeholderController.deletePlaceholder)

module.exports = router