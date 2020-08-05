const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, nameFirst, rekoDate) => {
    sgMail.send({
        to: email,
        from: 'dworek.rekolekcje.dziewczyny@gmail.com',
        subject: 'Potwierdzenie zapisu na rekolekcje w Dworku',
        html: `<p>Cześć ${nameFirst},</p>
        <p>właśnie zapisałaś się na rekolekcje w Dworku w terminie ${rekoDate}.</p>
        <p>Koszt rekolekcji dla studentek to 270 zł, a dla licealistek 190 zł.</p>
        <p>Konto do wpłat:</p>
        <p>Podlaskie Towarzystwo Oświatowo-Kulturalne (PTOK)</p>
        <p>Boża Wola 15, 05-332 Siennica</p>
        <p>Nr rachunku: 37 9226 0005 0045 0700 2000 0010</p>
        <p>Bank: Spółdzieczy w Mińsku Mazowieckim, Oddział w Siennicy</p>
        <p>Tytuł wpłaty: za pobyt w Centrum Konferencyjnym i Formacyjnym "Dworek" w dniach ... oraz na cele statutowe</p>
        <p>W razie pytań, odpisz na tego maila lub zadzwoń: 539 818 750 (Magda)</p>
        <p><b>Do zobaczenia! :)</b></p>`
    })
}

module.exports = {
    sendWelcomeEmail
}