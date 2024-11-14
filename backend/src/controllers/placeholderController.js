const placeholderController = require('./placeholderController')

// basic CRUD operations for placeholders
const getAllPlaceholders = async (req, res) => {
    res.send('All placeholders')
}

const getPlaceholder = async (req, res) => {
    res.send('One placeholder')
}

const createPlaceholder = async (req, res) => {
    res.send('Create placeholder')
}

const updatePlaceholder = async (req, res) => {
    res.send('Update placeholder')
}

const deletePlaceholder = async (req, res) => {
    res.send('Delete placeholder')
}

module.exports = {
    getAllPlaceholders,
    getPlaceholder,
    createPlaceholder,
    updatePlaceholder,
    deletePlaceholder,
}