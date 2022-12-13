const enablePrev = document.getElementById("prev");
const nextBtn = document.getElementById("next").childNodes[1];
const progress = document.getElementById("progress-bar");
let x = 0;

nextBtn.addEventListener('click', function(){
    x++;
    switch (`${x}`){
        case '1':
            enablePrev.childNodes[1].disabled = false;
            document.getElementById("next").childNodes[1].textContent = "Proceed to Payment";
            document.getElementById("next").childNodes[1].disabled = "true";
            progress.setAttribute('style','width: 66.6%');
            nextBtn.removeAttribute("data-bs-target");
            nextBtn.removeAttribute("data-bs-slide");
            break;
        case '2':
            progress.setAttribute('style','width: 100%');
            document.getElementById("next").childNodes[1].textContent = "Place Order";
            document.getElementById("next").childNodes[1].removeAttribute("data-bs-target");
            document.getElementById("next").childNodes[1].removeAttribute("data-bs-slide");
            document.getElementById("next").childNodes[1].disabled = "true";
            break;
        default:
            x = 2;
            document.getElementById("next").childNodes[1].disabled = true;
            break;
    }
});

const previous = enablePrev.childNodes[1].addEventListener('click', function(e){
    x--;
    switch (`${x}`){
        case '0':
            enablePrev.childNodes[1].disabled = true;
            document.getElementById("next").childNodes[1].textContent = "Next";
            progress.setAttribute('style','width: 33.3%');
            document.getElementById("next").childNodes[1].disabled = false;
            break;
        case '1':
            enablePrev.childNodes[1].disabled = false;
            document.getElementById("next").childNodes[1].textContent = "Proceed to Payment";
            progress.setAttribute('style','width: 66.6%');
            document.getElementById("next").childNodes[1].setAttribute("data-bs-target","#carouselExampleControls");
            document.getElementById("next").childNodes[1].setAttribute("data-bs-slide","next");
            document.getElementById("next").childNodes[1].disabled = false;
            break;
        case '2':
            progress.setAttribute('style','width: 100%');
            document.getElementById("next").childNodes[1].textContent = "Place Order";
            break;
        default:
            x = 0;
            break;
    }

});

const personalInfoValidation = document.querySelectorAll(".form-floating > .form-control, .form-select");
let fondant, numberCake, CakeCupcake, Cookies, Cupcake;
let orderFondant, orderNumberCake, OrderCakeCupcake, orderCookies, orderCupcake;

document.querySelectorAll("#order").forEach((button) => {
    button.addEventListener('click', function(){
      const clickOrder = this.name;
    //   const parentNode = document.getElementById("orderCake");
      switch (clickOrder){
        case 'fullFondant':
            if(this.getAttribute("class") == "btn btn-light my-1 selected"){
                this.classList = "btn btn-light my-1";
                this.removeAttribute("value");
                // parentNode.removeChild(document.getElementById("fondant"));
                document.getElementById("fondant").classList = "row d-none";
                orderFondant = false;
            }else{
                this.classList += " selected";
                this.setAttribute("value", "fullFondant");
                document.getElementById("fondant").classList = "row";
                orderFondant = true;
            };
            break;
        case 'numberCake':
            if(this.getAttribute("class") == "btn btn-light my-1 selected"){
                this.classList = "btn btn-light my-1";
                this.removeAttribute("value");
                document.getElementById("numberCake").classList = "row d-none";
                // parentNode.removeChild(document.getElementById("numberCake"));
                orderNumberCake = false;
            }else{
                this.classList += " selected";
                this.setAttribute("value", "numberCake");
                document.getElementById("numberCake").classList = "row";
                orderNumberCake = true;
            };
            break;
        case 'CakesCupcake':
                if(this.getAttribute("class") == "btn btn-light my-1 selected"){
                    this.classList = "btn btn-light my-1";
                    this.removeAttribute("value");
                    document.getElementById("CakeCupcake").classList = "row d-none";
                    // parentNode.removeChild(document.getElementById("CakeCupcake"));
                    OrderCakeCupcake = false;
                }else{
                    this.classList += " selected";
                    this.setAttribute("value", "CakesCupcake");
                    document.getElementById("CakeCupcake").classList = "row";
                    OrderCakeCupcake = true;
                };
                break;
        case 'Cookies':
            if(this.getAttribute("class") == "btn btn-light my-1 selected"){
                this.classList = "btn btn-light my-1";
                this.removeAttribute("value");
                document.getElementById("Cookies").classList = "row d-none";
                orderCookies = false;
            }else{
                this.classList += " selected";
                this.setAttribute("value", "Cookies");
                document.getElementById("Cookies").classList = "row";
                orderCookies = true;
            };
            break;
        case 'Cupcake':
            if(this.getAttribute("class") == "btn btn-light my-1 selected"){
                this.classList = "btn btn-light my-1";
                this.removeAttribute("value");
                document.getElementById("Cupcakes").classList = "row d-none";
                orderCupcake = false;
            }else{
                this.classList += " selected";
                this.setAttribute("value", "Cupcake");
                document.getElementById("Cupcakes").classList = "row";
                orderCupcake = true;
            };
            break;
      }
      console.log(this.value);
    });
});

let z = 0;

do{
    personalInfoValidation[z].setAttribute("autocomplete", "off");
    z++;
}while( z < personalInfoValidation.length);

personalInfoValidation.forEach( (inputField) => {
    inputField.addEventListener('blur', function(){
        const inputLabel = this.ariaLabel;
        const validationErr = document.querySelectorAll("#validation");
        if(Array.from(personalInfoValidation).indexOf(this) == 30 || Array.from(personalInfoValidation).indexOf(this) == 31){
            // do nothing - without this block, an error will show.
        }else if(this.value == ""){
            validationErr[Array.from(personalInfoValidation).indexOf(this)].textContent = "This field is required."
        }
        else{
            validationErr[Array.from(personalInfoValidation).indexOf(this)].textContent= "";
        }

        if(personalInfoValidation[0].value && personalInfoValidation[1].value &&  personalInfoValidation[2].value && personalInfoValidation[3].value &&
            personalInfoValidation[4].value && personalInfoValidation[5].value && personalInfoValidation[6].value && personalInfoValidation[7].value&&
            personalInfoValidation[8].value && personalInfoValidation[9].value && personalInfoValidation[10].value && personalInfoValidation[11].value &&
            personalInfoValidation[12].value){
                nextBtn.disabled = false;
                nextBtn.setAttribute("data-bs-target", "#carouselExampleControls");
                nextBtn.setAttribute("data-bs-slide", "next");
                // data-bs-target="#carouselExampleControls" data-bs-slide="next"
        }
        else{
            document.getElementById("next").childNodes[1].disabled = true;
        }

        if(orderFondant){
            if(personalInfoValidation[13].value && personalInfoValidation[14].value && personalInfoValidation[15].value){
                fondant = true;
            }else{fondant = false;}
        }
        if(orderNumberCake){
            if(personalInfoValidation[16].value && personalInfoValidation[17].value && personalInfoValidation[18].value){
                numberCake = true
            }else{numberCake = false}
        }
        if(OrderCakeCupcake){
            if(personalInfoValidation[19].value && personalInfoValidation[20].value && personalInfoValidation[21].value){
                CakeCupcake = true
            }else{CakeCupcake = false}
        }
        if(orderCookies){
            if(personalInfoValidation[22].value && personalInfoValidation[23].value && personalInfoValidation[24].value){
                Cookies = true
            }else{Cookies = false}
        }
        if(orderCupcake){
            if(personalInfoValidation[25].value && personalInfoValidation[26].value && personalInfoValidation[27].value){
                Cupcake = true
            }else{Cupcake = false}
        }

        if(fondant || numberCake || CakeCupcake || Cookies || Cupcake && personalInfoValidation[28].value && personalInfoValidation[29].value){
            // if(personalInfoValidation[28].value && personalInfoValidation[29].value){
            nextBtn.disabled = false;
            nextBtn.setAttribute("data-bs-target", "#carouselExampleControls");
            nextBtn.setAttribute("data-bs-slide", "next");
            nextBtn.setAttribute("onclick", "storeOrderToLocal()");
            // console.log('sadadwad');
            // }else{
            //     nextBtn.disabled = false;
            // }
        }

        console.log(Array.from(personalInfoValidation).indexOf(this));

        switch (inputLabel) {
            case 'firstname':
                if(this.value == ''){
                    document.querySelectorAll("#validation")[0].textContent = `Your first name is required **`;
                    this.classList += ` border border-danger`;
                }else{
                    document.querySelectorAll("#validation")[0].textContent = ``
                    this.classList = `form-control`;
                }
                break;
            case 'surname':
                if(this.value == ''){
                    document.querySelectorAll("#validation")[1].textContent = `Your last name is required **`;
                    this.classList += ` border border-danger`;
                }
                else{
                    document.querySelectorAll("#validation")[1].textContent = ``;
                    this.classList = `form-control`;
                }
                break;
            case 'email':
                if(this.value == ''){
                    document.querySelectorAll("#validation")[2].textContent = `Your email is required **`;
                    this.classList += ` border border-danger`;
                }
                else{
                    if(validateEmail(this.value)){
                        document.querySelectorAll("#validation")[2].textContent = ``;
                        this.classList = `form-control`;
                    }else{
                        document.querySelectorAll("#validation")[2].textContent = `Please input valid a email **`;
                        this.classList += ` border border-danger`;
                        this.value = '';
                    }
                }
                break;
            case 'phoneNum':
                if(this.value == ''){
                    document.querySelectorAll("#validation")[3].textContent = `Your number is required **`;
                    this.classList += ` border border-danger`;
                }
                else{
                    document.querySelectorAll("#validation")[3].textContent = ``;
                    this.classList = `form-control`;
                }
                break;
            case 'birth':
                if(this.value == ''){
                    document.querySelectorAll("#validation")[4].textContent = `Birth date is required **`;
                    this.classList += ` border border-danger`;
                }
                else{
                    document.querySelectorAll("#validation")[4].textContent = ``;
                    this.classList = `form-control`;
                }
                break;
            case 'Gender':
                if(this.value == ''){
                    document.querySelectorAll("#validation")[5].textContent = `Select your Gender **`;
                    this.classList += ` border border-danger`;
                }
                else{
                    document.querySelectorAll("#validation")[5].textContent = ``;
                    this.classList = `form-select`;
                }
                break;
            case 'lotNum':
                if(this.value == ''){
                    document.querySelectorAll("#validation")[6].textContent = `Required **`;
                    this.classList += ` border border-danger`;
                }
                else{
                    document.querySelectorAll("#validation")[6].textContent = ``;
                    this.classList = `form-control`;
                }
                break;
            case 'bldgName':
                if(this.value == ''){
                    document.querySelectorAll("#validation")[7].textContent = `Required **`;
                    this.classList += ` border border-danger`;
                }
                else{
                    document.querySelectorAll("#validation")[7].textContent = ``;
                    this.classList = `form-control`;
                }
                break;
            case 'floor':
                if(this.value == ''){
                    document.querySelectorAll("#validation")[8].textContent = `Required **`;
                    this.classList += ` border border-danger`;
                }
                else{
                    document.querySelectorAll("#validation")[8].textContent = ``;
                    this.classList = `form-control`;
                }
                break;
            case 'street':
                if(this.value == ''){
                    document.querySelectorAll("#validation")[9].textContent = `Required **`;
                    this.classList += ` border border-danger`;
                }
                else{
                    document.querySelectorAll("#validation")[9].textContent = ``;
                    this.classList = `form-control`;
                }
                break;
            case 'brgy':
                if(this.value == ''){
                    document.querySelectorAll("#validation")[10].textContent = `Required **`;
                    this.classList += ` border border-danger`;
                }
                else{
                    document.querySelectorAll("#validation")[10].textContent = ``;
                    this.classList = `form-control`;
                }
                break;
            case 'zip':
                if(this.value == ''){
                    document.querySelectorAll("#validation")[11].textContent = `Required **`;
                    this.classList += ` border border-danger`;
                }
                else{
                    document.querySelectorAll("#validation")[11].textContent = ``;
                    this.classList = `form-control`;
                }
                break;
            case 'city':
                if(this.value == ''){
                    document.querySelectorAll("#validation")[12].textContent = `Required **`;
                    this.classList += ` border border-danger`;
                }
                else{
                    document.querySelectorAll("#validation")[12].textContent = ``;
                    this.classList = `form-control`;
                }
                break;
            default:
                break;
        }
        
    });
});

document.getElementById("address").addEventListener('change', function(){
    if(this.value == ""){
        document.querySelectorAll("#invalid")[0].classList += " d-block";
    }else{
        document.querySelectorAll("#invalid")[0].classList = "invalid-feedback";
        storeOrderToLocal();
    }
});

document.getElementById("same-address").addEventListener('click', function(){
    if(document.getElementById("same-address").checked){
        document.getElementById("address").value = `${personalInfoValidation[6].value} ${personalInfoValidation[9].value} St. Brgy. ${personalInfoValidation[10].value}, zip code ${personalInfoValidation[11].value}, ${personalInfoValidation[12].value} City`;
    }else{
        document.getElementById("address").value="";
    }
});

const ccName = document.getElementById("cc-name");
const ccNumber = document.getElementById("cc-number");
const ccExpiration = document.getElementById("cc-expiration");
const ccCvv = document.getElementById("cc-cvv");

ccName.addEventListener('blur', function(){
    if(!this.value.indexOf(" ") || !this.value){
        document.querySelectorAll("#invalid")[1].innerHTML = "Your full name as displayed on card is required";
        document.querySelectorAll("#invalid")[1].classList += " d-block";
    }else{
        document.querySelectorAll("#invalid")[1].classList = "invalid-feedback";
    }
    if(ccName.value && ccNumber.value && ccExpiration.value && ccCvv.value){
        nextBtn.disabled = false;
        nextBtn.setAttribute("data-bs-target", "#carouselExampleControls");
        nextBtn.setAttribute("data-bs-slide", "next");
        nextBtn.setAttribute("onclick", "storeOrderToDb()");
    }
});

ccNumber.addEventListener('blur', function(){
    if(!this.value){
        document.querySelectorAll("#invalid")[2].classList += " d-block";
    }else{
        document.querySelectorAll("#invalid")[2].classList = "invalid-feedback";
    }
    if(ccName.value && ccNumber.value && ccExpiration.value && ccCvv.value){
        nextBtn.disabled = false;
        nextBtn.setAttribute("data-bs-target", "#carouselExampleControls");
        nextBtn.setAttribute("data-bs-slide", "next");
        nextBtn.setAttribute("onclick", "storeOrderToDb()");
    }
});

ccExpiration.addEventListener('blur', function(){
    if(!this.value){
        document.querySelectorAll("#invalid")[3].classList += " d-block";
    }else{
        document.querySelectorAll("#invalid")[3].classList = "invalid-feedback";
    }
    if(ccName.value && ccNumber.value && ccExpiration.value && ccCvv.value){
        nextBtn.disabled = false;
        nextBtn.setAttribute("data-bs-target", "#carouselExampleControls");
        nextBtn.setAttribute("data-bs-slide", "next");
        nextBtn.setAttribute("onclick", "storeOrderToDb()");
    }
});

ccCvv.addEventListener('blur', function(){
    if(!this.value){
        document.querySelectorAll("#invalid")[4].classList += " d-block";
    }else{
        document.querySelectorAll("#invalid")[4].classList = "invalid-feedback";
    }
    if(ccName.value && ccNumber.value && ccExpiration.value && ccCvv.value){
        nextBtn.disabled = false;
        nextBtn.setAttribute("data-bs-target", "#carouselExampleControls");
        nextBtn.setAttribute("data-bs-slide", "next");
        nextBtn.setAttribute("onclick", "storeOrderToDb()");
    }
});

let orderItems;

function storeOrderToLocal(){

    orderItems = {
                orderId :   personalInfoValidation[2].value.replaceAll(".","DOT"),
                personsInfo : {
                    Name : personalInfoValidation[0].value + " " + personalInfoValidation[1].value,
                    Email : personalInfoValidation[2].value,
                    PhoneNumber : personalInfoValidation[3].value,
                    Birthdate : personalInfoValidation[4].value,
                    Gender : personalInfoValidation[5].value,
                    Address : `Lot #${personalInfoValidation[6].value} ${personalInfoValidation[7].value} Bldg. flr.#${personalInfoValidation[8].value}, ${personalInfoValidation[9].value} St. Brgy. ${personalInfoValidation[10].value} zip ${personalInfoValidation[11].value} ${personalInfoValidation[12].value} City`
                },
                orders : {
                    full_fondant : {
                        pcs : personalInfoValidation[13].value,
                        layers : personalInfoValidation[14].value,
                        flavor : personalInfoValidation[15].value
                    },
                    number_cake : {
                        pcs : personalInfoValidation[16].value,
                        cakeNumber : personalInfoValidation[17].value,
                        flavor : personalInfoValidation[18].value
                    },
                    cakesAndCupcake : {
                        Cake_pcs : personalInfoValidation[19].value,
                        Cupcake_pcs : personalInfoValidation[20].value,
                        flavor : personalInfoValidation[21].value
                    },
                    Cookies : {
                        cookie_wrap : personalInfoValidation[22].value,
                        cookie_pcs : personalInfoValidation[23].value,
                        flavor : personalInfoValidation[24].value
                    },
                    cupcakes : {
                        package : personalInfoValidation[25].value,
                        cupcake_pcs : personalInfoValidation[26].value,
                        flavor : personalInfoValidation[27].value
                    }
                },
                shippingAddress : document.getElementById("address").value
            };
    localStorage.setItem('orderedItems', JSON.stringify(orderItems));
}

function storeOrderToDb(){
    
    let storeOrderToDbXHR = new XMLHttpRequest();
    storeOrderToDbXHR.open('POST', 'https://youdessertgallery-default-rtdb.asia-southeast1.firebasedatabase.app/orderItems.json');
    storeOrderToDbXHR.setRequestHeader('Content-Type', 'application/json');
    storeOrderToDbXHR.onreadystatechange = function(){
       if(storeOrderToDbXHR.status == 200 && storeOrderToDbXHR.readyState ==4){

       } 
    }
    storeOrderToDbXHR.send(JSON.stringify(orderItems));
}

function orderConfirmation(){

    const templateId = "template_rtnxe04";
    const serviceId = "service_d15rdjn";
    const fullname = personalInfoValidation[0].value + " " + personalInfoValidation[1].value;

    var params = {
      name : fullname ,
      email : personalInfoValidation[2].value,
      message : `orderId : ${personalInfoValidation[2].value};`
    }
  
    emailjs.send(serviceId, templateId, params)
        .then((res) => {
            console.log(res, "message sent");
        }
    ).catch((err) => console.log(err));
  }
