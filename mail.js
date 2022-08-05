var nodemailer = require("nodemailer");
require("dotenv").config();
var transport = nodemailer.createTransport({
     host: "smtp.gmail.com",
     port:587,
     secure:false,
     requireTLS:true,
     auth:{
        user:"uikey.virendra11@gmail.com",
        pass:process.env.PASS
     }
});

var mailOptions={
    from:"uikey.Virendra11@gmail.com",
    to:"aarushuikey@gmail.com",
    subject:"testing mail send",
    text: "hello from virendra to aarush"
}

transport.sendMail(mailOptions,function(err,info){
    if(err){
        console.log(err.message)
    }else{
        console.log("email has been send ", info.response)
    }
})