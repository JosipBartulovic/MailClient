const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: '<Your mail>',
        pass: '<Your password>'
    }
})


function* mailGen(){
    let messages = ['Hey', 'Pederu', 'Ovo', 'Je', 'Skripta', 'Koja', 'Salje', 'Mailove']
    let mail = {
        from: 'jolebartulo@gmail.com',
        to: 'ivan.luka.1234@gmail.com',
        subject: 'Hello',
        text: 'Hello world',
    }
    for(let i=0; i<messages.length; i++){
        mail.text = messages[i]
        yield mail;
    }
}

function sendMail(mail){
    transporter.sendMail(mail, (err, info) => {
        if (err){
            console.log(err)
        }
        console.log('Message sent: %s', info.messageId);
    })
}


function doSetTimeout(ele){
    setTimeout(function() { sendMail(ele) }, 10000)
}

let mails = mailGen()
for(let mail of mails){
    doSetTimeout(JSON.parse(JSON.stringify(mail)))
}


