var nodemailer = require('nodemailer');

const WelcomeMail = async (Email) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'gajendra.mishra7503@gmail.com',
          pass: 'nteukjnouhiduhnp'
        }
      });
      var mailOptions = {
        from: 'gajendra.mishra7503@gmail.com',
        to: Email,
        subject: 'Successfully logged In',
        text: 'Welcome to our Restaurant Dashboard.You are successfully logged in......' 
      };
     
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); 
}

const NewUserEmail = async (Email) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'gajendra.mishra7503@gmail.com',
          pass: 'nteukjnouhiduhnp'
        }
      });
      var mailOptions = {
        from: 'gajendra.mishra7503@gmail.com',
        to: Email,
        subject: 'Created New Account Successfully',
        text: 'You have successfully created a new account.Now you can login with '+ Email
      };
     
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); 
}
module.exports={WelcomeMail, NewUserEmail};



