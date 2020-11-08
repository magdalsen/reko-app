const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    nameFirst: {
        type: String,
        required: true,
        trim: true
    },
    surname: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    rekoDate: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 0,
        required: true,
        validate(value) {
            if (value < 13) {
                throw new Error('Na rekolekcje można się zapisać od 8 klasy.')
            }
        }
    },
    tel: {
        type: Number,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('E-mail niepoprawny. Spróbuj ponownie.')
            }
        }
    },
    arrive: {
        type: String,
        required: true,
        trim: true
    },
    comments: {
        type: String,
        required: false,
        trim: true
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User

// const me = new User({
//     nameFirst: 'M',
//     nameSecond: 'S'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })