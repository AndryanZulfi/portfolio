const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const nodemailer = require('nodemailer');
const cors = require('cors');

app.use(cors({ origin: '*' }));

require('dotenv').config()
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS,
    },
  });



app.get('/', (res, req) => {
  res.status(200).send('Hello World!')
})

app.post("/send-email", (req, res) => {
  try{
    const {nama, email, message} = req.body;
    console.log(nama, email, message)

    const mailOptions = {
      to: "andryanzulfi2007@gmail.com", 
      subject: `Pesan dari ${nama}`,
      text: email+"\n\n"+ message,
    };

    if(!nama || !email || !message){
      return res.status(400).send("Data tidak lengkap");
    } else {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.status(500).send("Gagal mengirim email");
        } else {
          console.log("Email terkirim: " + info.response);
          res.status(200).send("Email berhasil dikirim");
        }
      });
    }
  }catch(error){
    console.log(error);
    return res.status(500).send("Terjadi kesalahan pada server");
  }


    
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
})