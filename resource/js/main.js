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
  document.getElementsByClassName("form-control")[0].value = "";
  document.getElementsByClassName("form-control")[1].value = "";
  document.getElementsByClassName("form-control")[2].value = "";
  document.getElementsByClassName("form-control")[3].value = "";
  document.getElementsByClassName("form-control")[4].value = "";
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
  var newsEmail = document.getElementsByClassName("form-control")[5];
  var newsErr = document.getElementById('newsEmail');

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

    const newsTemplate= "template_3zw848m";
    const newsService = "service_erdiz4k";
    var newsReciever ={
      newsletter : newsEmail.value,
      email : newsEmail.value,
    }

      emailjs.send(newsService, newsTemplate, newsReciever)
      .then((res) => {
          document.getElementsByClassName("form-control")[5].value;
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

    // // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        const phoneNum = document.getElementsByTagName("input")[3].value;
        event.preventDefault()
        if (!form.checkValidity()) {
          event.stopPropagation()
        }else if( grecaptcha.getResponse().length == ''){
          document.getElementById("captcha").innerHTML = "Please Check reCAPTCHA"
        }else if(phoneNum != ""){
          if(phoneNum.startsWith("09" || "+63") && phoneNum.length <= 13){
            sendEnquiry()
          }else{
            document.getElementById("phoneNumValid").innerHTML = "Please input a valid 11 digit contact number or you can leave it empty";
            document.getElementById("phoneNumValid").classList.add('d-block');
          }
        }
        else{
          sendEnquiry()
          grecaptcha.reset()
        }form.classList.add('was-validated')
      }
      )
    })
  })()


  function sendEnquiry(){

    const templateId = "template_23rrysf";
    const serviceId = "service_erdiz4k";
    const fullname = document.getElementsByTagName('input')[0].value .concat(" ".concat(document.getElementsByTagName("input")[1].value))

    // var data = {
    //   service_id : "service_8bbpu2b",
    //   template_id : "template_23rrysf",
    //   user_id : '0WnMJ0BiL31tAZwFW',
    //   // template_params : {
    //   //   'username' : 'youdessertitmore@gmail.com',
    //   //   'g-recaptcha-response' : onloadCallback()
    //   // }
    // }

    var params = {
      name : fullname ,
      email : document.getElementsByTagName("input")[2].value,
      message : document.getElementsByTagName("textarea")[0].value + " <br> Phone Number: " + document.getElementsByTagName("input")[3].value,
    };
  
    emailjs.send(serviceId, templateId, params)
        .then((res) => {
            document.getElementsByTagName('input')[0].value;
            document.getElementsByTagName('input')[1].value;
            document.getElementsByTagName('input')[2].value;
            document.getElementsByTagName('input')[4].value;
            document.getElementsByTagName('textarea')[0].value;
            console.log(res, "message sent");
        }
    ).catch((err) => console.log(err));
    document.getElementById("headerResponse").textContent = "Message sent!";
    document.getElementById("response").innerHTML = "You will recieve a reply from us as soon as possible.";
    const toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
  }


  function retrieveRegions() { 
    let xhr = new XMLHttpRequest();
    let phRegions = `https://ph-locations-api.buonzz.com/v1/regions`
    xhr.open("GET", phRegions);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onreadystatechange = function () { 
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const regions = JSON.parse(xhr.responseText);
            for(let x = 0; x < regions['data'].length; x++){
              document.getElementById("regions").innerHTML += `<option value="${regions['data'][x]['name']}">${regions['data'][x]['name']}</option>`;
              console.log(regions['data'][x]['name']);
            }
         }
    }
    xhr.send();
  }

  function retrieveCities() { 
    let xhr = new XMLHttpRequest();
    let phCities = `https://ph-locations-api.buonzz.com/v1/cities`
      if(localStorage.getItem('cities') != null){
        assignCityToElement();
      }
      else{
        xhr.open("GET", phCities);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          const cities = JSON.parse(xhr.responseText);
          const recievedCities = [];
          for(let x = 0; x < cities['data'].length; x++){
            recievedCities.push(cities['data'][x]['name']);
          }
        localStorage.setItem('cities', JSON.stringify(recievedCities));
       }
      }
      xhr.send();
    }
  }

  function assignCityToElement(){
    const localCity = JSON.parse(localStorage.getItem('cities'));
    for(let x = 0; x < localCity.length; x++){
      document.getElementById("city").innerHTML += `<option value="${localCity[x]}">${localCity[x]}</option>`;
    }
    
  }