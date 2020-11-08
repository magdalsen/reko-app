const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, nameFirst, rekoDate) => {
    sgMail.send(
        {
            to: email,
            from: {
                email: 'dworek.rekolekcje.dziewczyny@gmail.com',
                name: 'Rekolekcje w Dworku'
            },
            subject: 'Potwierdzenie zapisu na rekolekcje w Dworku',
            html: `<p>Cześć ${nameFirst},</p>
                    <p>właśnie zapisałaś się na rekolekcje w Dworku w terminie ${rekoDate}.</p>
                    <p>Koszt rekolekcji dla studentek to 270 zł, a dla licealistek 190 zł.</p>
                    <p>Rekolekcje zaczynają się o godz. 20:00 wspólną kolacją.</p>
                    <p>Konto do wpłat:</p>
                    <p>Podlaskie Towarzystwo Oświatowo-Kulturalne (PTOK)</p>
                    <p>Boża Wola 15, 05-332 Siennica</p>
                    <p>Nr rachunku: 37 9226 0005 0045 0700 2000 0010</p>
                    <p>Bank: Spółdzieczy w Mińsku Mazowieckim, Oddział w Siennicy</p>
                    <p>Tytuł wpłaty: za pobyt w Centrum Konferencyjnym i Formacyjnym "Dworek" w dniach ... oraz na cele statutowe</p>
                    <p>W razie pytań, odpisz na tego maila lub zadzwoń: 539 818 750 (Magda)</p>
                    <p><b>Do zobaczenia! :)</b></p>`  
        }
        )
}
const sendBccEmail = (nameFirst, surname, city, rekoDate, age, tel, email, arrive, comments) => {
    sgMail.send(
        {
            
            to: "magdal.sen@gmail.com",
            from: {
                email: 'dworek.rekolekcje.dziewczyny@gmail.com',
                name: 'Rekolekcje w Dworku'
            },
            subject: `Zapis od ${nameFirst} ${surname}`,
            html: `<p>Nowy zapis na rekolekcje:</p>
            <p>Imię: ${nameFirst}</p>
            <p>Nazwisko: ${surname}</p>
            <p>Miasto: ${city}</p>
            <p>Data rozpoczęcia rekolekcji: ${rekoDate}</p>
            <p>Wiek: ${age}</p>
            <p>Telefon: ${tel}</p>
            <p>E-mail: ${email}</p>
            <p>Przyjazd: ${arrive}</p>
            <p>Uwagi: ${comments}</p>`,
            bcc: {
                email: "dworek.rekolekcje.dziewczyny@gmail.com"
            }
                    
        }
    )
}

module.exports = {
    sendWelcomeEmail,
    sendBccEmail
}