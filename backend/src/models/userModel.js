const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            require: true,
            unique: true
        },
        nombre: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Users', UsersSchema);