const path = require('path')
const express = require('express')
const hbs = require('hbs')
require('./db/mongoose')
const User = require('./models/user')
const { sendWelcomeEmail } = require('./emails/account')

const app = express()
const port = process.env.PORT

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Formularz zapisu na rekolekcje w Dworku',
        forGirls: 'dla dziewczyn',
        name: '@Dworek'
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Kontakt',
        name: '@Dworek'
    })
})

app.get('/payments', (req, res) => {
    res.render('payments', {
        helpText: 'Numer konta do opłaty za rekolekcje w Dworku:',
        title: 'Konto do wpłat',
        name: '@Dworek'
    })
})

app.get('/form', (req, res) => {
    if (req.query.age <= 13) {
        return res.send({
            error: 'Musisz mieć więcej, niż 13 lat!'
        })
    }
    if (isNaN(req.query.tel)) {
        return res.send({
            error: 'Numer telefonu musi być liczbą!'
        })
    }
    if (!req.query.nameFirst || !req.query.surname || !req.query.rekoDate || !req.query.age || !req.query.tel || !req.query.email) {
        return res.send({
            error: 'Wszystkie pola (oprócz "Uwagi") muszą być uzupełnione!'
        })
    }
    nameFirst = req.query.nameFirst
    surname = req.query.surname
    rekoDate = req.query.rekoDate
    age = req.query.age
    tel = req.query.tel
    email = req.query.email
    arrive = req.query.arrive
    comments = req.query.comments
    const user = new User({ nameFirst, surname, rekoDate, age, tel, email, arrive, comments })
    user.save().then(() => {
        res.send(user)
        sendWelcomeEmail(user.email, user.nameFirst, user.rekoDate)
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})