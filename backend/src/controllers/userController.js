const User = require('../models/userModel')


// basic CRUD operations for users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users).status(200)
    } catch (error) {
        console.log('Error getting users:', error);
        res.status(500).json({ message: 'Error getting users' });
    }
}

const getUser = async (req, res) => {
    res.send('One user')
}

const createUser = async (req, res) => {
    res.send('Create user')
}

const updateUser = async (req, res) => {
    res.send('Update user')
}

const deleteUser = async (req, res) => {
    res.send('Delete user')
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
}