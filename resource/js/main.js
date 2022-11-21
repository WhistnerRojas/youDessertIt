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

//   // Example starter JavaScript for disabling form submissions if there are invalid fields
//   (() => {
//     'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        else{
            event.preventDefault()
            sendEnquiry()
        }
        form.classList.add('was-validated')
      }, )
    })
//   })()