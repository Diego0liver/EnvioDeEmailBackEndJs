const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()


router.post('/contato', (req, res)=>{
    let transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "c5cbecb58497dd",
          pass: "f2c1b4662c442e"
        }
      });

    let mensagem ={
        from: req.body.from,
        to: 'suporte@gamil.com',
        subject: req.body.subject,
        html: req.body.email,
        text: req.body.email     
    }
     transport.sendMail(mensagem, function (erro){
        if(erro) return res.status(400).send({Erro: 'Erro ao enviar o email'})
     })
     return res.send({
        Ok: 'Email enviado com sucesso'
     })

})



module.exports = router