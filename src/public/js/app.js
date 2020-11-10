console.log('Client side javascript, hi!:)')

const form = document.querySelector('form')
const searchFirstName = document.querySelector('#nameFirst')
const searchSurname = document.querySelector('#surname')
const searchRekoDate = document.querySelector('#rekoDate')
const searchAge = document.querySelector('#age')
const searchTel = document.querySelector('#tel')
const searchEmail = document.querySelector('#email')
const searchArrive = document.querySelector('#arrive')
const searchComments = document.querySelector('#comments')

const searchFunc = (e) => {
    e.preventDefault()

    const nameFirst = searchFirstName.value
    const surname = searchSurname.value
    const rekoDate = searchRekoDate.value
    const age = searchAge.value
    const tel = searchTel.value
    const email = searchEmail.value
    const arrive = searchArrive.value
    const comments = searchComments.value
    
    const url = 'http://zapisy-rekolekcje.herokuapp.com/form?nameFirst=' + nameFirst + '&' + 'surname=' + surname + '&' + 'rekoDate=' + rekoDate + '&' + 'age=' + age + '&' + 'tel=' + tel + '&' + 'email=' + email + '&' + 'arrive=' + arrive + '&' + 'comments=' + comments

    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                alert(data.error)
            } else {
                alert('Dziękujemy za zapisanie się na rekolekcje. Wysłaliśmy do Ciebie mailowe potwierdzenie zapisu.')
                data
            }
        })
    })
    searchFirstName.value = ""
    searchFirstName.value = ""
    searchSurname.value = ""
    searchRekoDate.value = ""
    searchAge.value = ""
    searchTel.value = ""
    searchEmail.value = ""
    searchArrive.value = ""
    searchComments.value = ""
}

form.addEventListener('submit', searchFunc)