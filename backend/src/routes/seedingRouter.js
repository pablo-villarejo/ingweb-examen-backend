const express = require('express')

// import json data
const users = require('../seeding/users.json')
const placeholders = require('../seeding/placeholders.json')

// import models
const User = require('../models/userModel')
const Placeholder = require('../models/placeholderModel')

const router = express.Router()

router.get('/', async (req, res) => {
    try {

        //await User.deleteMany()
        //await Placeholder.deleteMany()
        //await User.insertMany(users)
        //await Placeholder.insertMany(placeholders)

        res.send('Data seeded')
    } catch (error) {
        res.status(500).send(error)
    }
}
)

module.exports = router