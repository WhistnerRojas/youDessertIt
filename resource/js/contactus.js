// function sendEnquiry(){

//     const templateId = "template_23rrysf";
//     const serviceId = "service_8bbpu2b";
//     const fullname = document.getElementsByTagName('input')[1].value .concat(" ".concat(document.getElementsByTagName("input")[2].value))
//     const captchaResponse = grecaptcha.getResponse(
//         onloadCallback()
//                 );
    
//     var params = {
//       name : fullname ,
//       email : document.getElementsByTagName("input")[3].value,
//       message : document.getElementsByTagName("textarea")[0].value + " <br> Phone Number: " + document.getElementsByTagName("input")[4].value,
//       template_params :
//         `g-recaptcha-response`: captchaResponse,

//     };

//     emailjs.send(serviceId, templateId, params)
//         .then((res) => {
//             document.getElementsByTagName('input')[1].value;
//             document.getElementsByTagName('input')[3].value;
//             document.getElementsByTagName('input')[4].value;
//             document.getElementsByTagName('textarea')[0].value;
//             captchaResponse;
//             console.log(res, "message sent");
//         }
//     ).catch((err) => console.log(err));
//     console.log(captchaResponse);
// }