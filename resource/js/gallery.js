// function checkLocalStorage(){

// }


function retrievePhotos() { 
    // let xhr = new XMLHttpRequest();
    // let dbUrl = `https://youdessertgallery-default-rtdb.asia-southeast1.firebasedatabase.app/cake.json`
    // xhr.open("GET", dbUrl);
    // xhr.setRequestHeader('Content-type', 'application/json');
    // xhr.onreadystatechange = function () { 
    //     if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    //         const photos = JSON.parse(xhr.responseText);
    //         imageLayout(photos);
    //      }
    // }
    // xhr.send();
}

function imageLayout(photos){

    const divImg = document.querySelector("#containPhotos");
    const modalImg = document.querySelector("#imgSlideHandler");
    const imgIndicatorHandler = document.getElementById("imgIndicator");
    let x = 0;

    for (let key = 1;key < photos.length; key++) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let linkToModal = document.createElement("a");

        // gallery layout
        div.setAttribute("class", "gallery-zoom");
        img.setAttribute("src", photos[key]['img-thumb-url']);
        img.setAttribute("alt", photos[key]['type']);
        linkToModal.setAttribute("data-bs-toggle","modal");
        linkToModal.setAttribute("data-bs-target","#staticBackdrop2");
        linkToModal.setAttribute("id", x);
        linkToModal.setAttribute("onclick", `toViewSelected(${x})`)
        divImg.appendChild(linkToModal);
        linkToModal.appendChild(div);
        div.appendChild(img);
        
        // for modal-carousel content

        let contentDiv = document.createElement("div");
        let contentImg = document.createElement("img");

        contentDiv.setAttribute("id", "img"+x);
        contentDiv.setAttribute("class", "carousel-item");
        contentImg.setAttribute("src", photos[key]['img-true-size-url']);
        contentImg.setAttribute("class", "d-block w-100");
        contentImg.setAttribute("alt", photos[key]['type']);
        modalImg.appendChild(contentDiv);
        contentDiv.appendChild(contentImg);

        // carousel Indicator

        let indicatorLink = document.createElement("a");
        let imgIndicator = document.createElement("img");
        imgIndicator.setAttribute("src", photos[key]['img-thumb-url']);
        imgIndicator.setAttribute("height", "100px");
        indicatorLink.setAttribute("id", "indicatorNum"+ x);
        indicatorLink.setAttribute("data-bs-slide-to", x);
        indicatorLink.setAttribute("aria-label","Slide "+ parseInt(x+1));
        indicatorLink.setAttribute("onclick", `toViewSelected(${x})`);
        imgIndicatorHandler.appendChild(indicatorLink);
        indicatorLink.appendChild(imgIndicator);

        x++;
    }
}

function toViewSelected(id){
    deActivate();
    let activeImg = document.getElementById(`img${id}`);
    activeImg.className += ' active';
    let linkIndicate = document.getElementById(`indicatorNum${id}`);
    linkIndicate.className = 'active';

    const navToIndicate = document.querySelectorAll("#staticBackdrop2 > button");
    navToIndicate.forEach((btn) => {
        id += 1;
      btn.addEventListener('click', (e)=>{
        if(e.target.getAttribute("class") == "carousel-control-next-icon"){
          
        }
      })
    })
}

function deActivate(){
    let deactivateImg = document.querySelectorAll("#imgSlideHandler > div");
    deactivateImg.forEach((element) => {
        element.className = "carousel-item"
      });
    let deActivateIndicator = document.querySelectorAll("#imgIndicator > a");
    deActivateIndicator.forEach((element) =>{
        element.removeAttribute("class");
    });
}

function toScrollRight() {  
  document.getElementById('imgIndicator').scrollLeft += 400;
}
function toScrollLeft() {  
  document.getElementById('imgIndicator').scrollLeft -= 400;
}