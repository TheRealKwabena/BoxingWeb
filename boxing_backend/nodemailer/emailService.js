var nodemailer = require("nodemailer");


 async function forgotPasswordSender( email, name, password) {
    await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.COMPANY_EMAIL,
        pass: process.env.COMPANY_PASSWORD,
      },
      logger: true,
    });
    await transporter.sendMail({
      from: '"BoxChamp Team" <boxchamp407@outlook.com',
      to: email, // must be email adress.
      subject: 'Forgot Password',
      text: '',
      html:
      '<body style="margin: auto; width: 75%; border: 1.5px solid #79c2d0; padding: 20px;">' +
      '<img src="cid:glovesicon" alt="Logo" style="border-radius: 30px; height: 50px; width: 130px;"/><h1 style="color:green;text-align:center;">  Hello ' + name + '! </h1> <br>'+
      '<div1 style="font-size: 28px; padding: 35px;"> Thank for being a regular user of <b>BoxChamp</b>! <br>' +
      'Here are your booking details: <br> </div1>' +
      '<div2 style="text-align: justify;"> <ul style="border: 2px solid green; margin: 30px; padding: 20px; padding-left: 5%;">' +
      '</li> <li>Existing password: ' + password + '</li> </ul> </div2><br/>',
      attachments: [
        {
          filename: 'glovesicon.png',
          path: '/home/kwabena/Desktop/BoxingWeb/boxing_ui/boxing_frontend/src/assets/glovesicon.png',
          cid: 'glovesicon'
        }
      ]
    });
    console.log('Message sent: %s');
  }

module.exports = {forgotPasswordSender};


