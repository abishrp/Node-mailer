const nodemailer = require('nodemailer');
const sender = nodemailer.createTransport(
    {
        service:"gmail",
        auth:{
            user:"abishamadis@gmail.com",
            pass:"ceoj escv dtgg jfet"
        }

    }
)

const composemail = {
    from: "abishamadis@gmail.com",
    to:"gerald.briyolan2002@gmail.com",
    subject:"Sending mail via nodejs",
    text:"How are you?",
    html:"<h1>Hello Gerald</h1>"
}

sender.sendMail(composemail,(err,info)=>
{
    if(err)
    {
        console.log("error"+err);
    }
    else{
        console.log("successful"+info.response);
    }
}
)