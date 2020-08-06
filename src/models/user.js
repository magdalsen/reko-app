const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    nameFirst: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
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
        required: false
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('E-mail niepoprawny. Spróbuj ponownie.')
            }
        }
    },
    arrive: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: false
    }
})

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