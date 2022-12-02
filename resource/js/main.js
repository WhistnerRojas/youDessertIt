const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const faders = document.querySelectorAll('.fade-in');
const appearOptions ={
    threshold: .2,
    rootMargin: "0px 0px -100px 0px"
};
const appearOnScroll = new IntersectionObserver(
    function(entries, appearOnScroll){
        entries.forEach(entry =>{
            if(!entry.isIntersecting){
                return;
            }else{
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
    }, appearOptions);

faders.forEach(fader =>{
    appearOnScroll.observe(fader);
});

function clrContact(){
  document.getElementById("captcha").innerHTML = "";
  document.getElementsByClassName("form-control")[1].value = "";
  document.getElementsByClassName("form-control")[2].value = "";
  document.getElementsByClassName("form-control")[3].value = "";
  document.getElementsByClassName("form-control")[4].value = "";document.getElementsByClassName("form-control")[5].value = "";
}

function validateEmail(Email) {
  let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return res.test(Email);
}

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

function newsLettercheck(){
  const newsTemplate= "template_3zw848m";
  const newsService = "service_8bbpu2b";
  var newsEmail = document.getElementsByClassName("form-control")[6];
  var newsErr = document.getElementById('newsEmail');
  var newsReciever ={
    newsletter : newsEmail.value,
    email : newsEmail.value,
  }

  if(newsEmail == "" || !validateEmail(newsEmail.value)){
      newsErr.setAttribute("class", "error");
      newsEmail.className +=" border-danger";
      newsErr.innerHTML = "Please enter a valid email address"
  }else if(validateEmail(newsEmail.value)){

      var addAttri = document.getElementById("subscribe");
      addAttri.setAttribute("data-bs-toggle", "modal");
      addAttri.setAttribute("data-bs-target", "#staticBackdrop");
      addAttri.click();
    
    } 
}

function newsSubscribe(){
  if(grecaptcha.getResponse(widgetId2) == ""){
    document.getElementById("newscaptcha").innerHTML = "Please Check reCAPTCHA";
  }
  else{
    document.getElementById('modalCls').click();
      emailjs.send(newsService, newsTemplate, newsReciever)
      .then((res) => {
          document.getElementsByClassName("form-control")[6].value;
          console.log(res, "email saved");
      }
  ).catch((err) => console.log(err));
    document.getElementById("headerResponse").textContent = "Thanks for Subscribing";
    document.getElementById("response").innerHTML = "You definitely deserved a good news!";
    const toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
    grecaptcha.reset()
  }
}

  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        event.preventDefault()
        if (!form.checkValidity()) {
          event.stopPropagation()
        }else if( grecaptcha.getResponse().length == ''){
          // alert ('Intruder!');
          document.getElementById("captcha").innerHTML = "Please Check reCAPTCHA"
        }
        else{
          document.getElementById("headerResponse").textContent = "Message sent!";
          document.getElementById("response").innerHTML = "You will recieve a reply from us as soon as possible.";
          const toast = new bootstrap.Toast(toastLiveExample)
          toast.show()

          const templateId = "template_23rrysf";
          const serviceId = "service_8bbpu2b";
          const fullname = document.getElementsByTagName('input')[1].value .concat(" ".concat(document.getElementsByTagName("input")[2].value))
      
          var params = {
            name : fullname ,
            email : document.getElementsByTagName("input")[3].value,
            message : document.getElementsByTagName("textarea")[0].value + " <br> Phone Number: " + document.getElementsByTagName("input")[4].value,
          };
        
          emailjs.send(serviceId, templateId, params)
              .then((res) => {
                  document.getElementsByTagName('input')[1].value;
                  document.getElementsByTagName('input')[3].value;
                  document.getElementsByTagName('input')[4].value;
                  document.getElementsByTagName('textarea')[0].value;
                  console.log(res, "message sent");
              }
          ).catch((err) => console.log(err));

          clrContact()
          grecaptcha.reset()
        }
        form.classList.add('was-validated')
      },)
    }) 
  })()

  // function sendEnquiry(){

  //   const templateId = "template_23rrysf";
  //   const serviceId = "service_8bbpu2b";
  //   const fullname = document.getElementsByTagName('input')[1].value .concat(" ".concat(document.getElementsByTagName("input")[2].value))

  //   var data = {
  //     service_id : "service_8bbpu2b",
  //     template_id : "template_23rrysf",
  //     user_id : '0WnMJ0BiL31tAZwFW',
  //     template_params : {
  //       'username' : 'youdessertitmore@gmail.com',
  //       'g-recaptcha-response' : onloadCallback()
  //     }
  //   }

  //   var params = {
  //     name : fullname ,
  //     email : document.getElementsByTagName("input")[3].value,
  //     message : document.getElementsByTagName("textarea")[0].value + " <br> Phone Number: " + document.getElementsByTagName("input")[4].value,
  //   };
  
  //   emailjs.send(serviceId, templateId, params)
  //       .then((res) => {
  //           document.getElementsByTagName('input')[1].value;
  //           document.getElementsByTagName('input')[3].value;
  //           document.getElementsByTagName('input')[4].value;
  //           document.getElementsByTagName('textarea')[0].value;
  //           console.log(res, "message sent");
  //       }
  //   ).catch((err) => console.log(err));

  //   $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
  //   type: 'POST',
  //   data: JSON.stringify(data),
  //   contentType: 'application/json'
  //   }).done(function() {
  //       console.log('Your mail is sent!');
  //   }).fail(function(error) {
  //       console.log('Oops... ' + JSON.stringify(error));
  //   });
  // }
