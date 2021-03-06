const { Schema, model } = require('mongoose');

const UserScheme = Schema({
    name: {
        type: String,
        required: [
            true,
            'Invalid name'
        ]
    },
    email: {
        type: String,
        required: [
            true,
            'Invalid email',
        ],
        unique: true
    },
    password: {
        type: String,
        required: [
            true,
            'Invalid password'
        ]
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        required: [
            true,
            'Invalid role'
        ],
        enum: [
            'ADMIN', 'EMPLOYEE'
        ]
    },
    status: {
        type: Boolean,
        default: true
    },
    isGoogle: {
        type: Boolean,
        default: false
    },
});

UserScheme.methods.toJSON = function(params) {
    const { __v, password, ...usuario } = this.toObject();
    return usuario;
}

module.exports = model('User', UserScheme);