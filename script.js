// currency convertor 
var price = document.querySelectorAll('.price');
var result = document.querySelectorAll('.result');
let x = 0;
function getResults() {
    fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
        .then(currency =>  currency.json())
        .then(currency => {
            let fromRate = currency.rates['USD'];
            let toRate = currency.rates['UAH'];
            price.forEach(element => {
                element = Number(element.innerText.slice(1))
                element = '= ₴' + ((toRate / fromRate) * element).toFixed(2);
                result[x].innerText = element;
                x++;
            })
        
        })
}
getResults()

function burgerMenu() {
    let element = document.getElementById("burger");
    let list = document.getElementById("navlist");
    if(element.classList.contains("cross") ){
        // open menu
        element.classList.remove("cross");
        list.classList.remove("mobile_list");

    }else{
        // closed menu
        element.classList.add("cross");
        list.classList.add("mobile_list");
    };

  }


  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const closeModalBtn = document.querySelector(".btn-close");

  // close modal function
  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };
  
  // close the modal when the close button and overlay is clicked
  closeModalBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
  
  // close modal when the Esc key is pressed
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
  


//   faq text
  function show(title){
    let text = document.getElementById(title);
    if(text.classList.contains("show") ){
        text.classList.remove("show");
    }else{
        text.classList.add("show");
    };

  }

// caorusel
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
function nextButtonfunc(){
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
}
function prevButtonfunc(){
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
}

window.addEventListener('resize', function(){
    const slideWidth = '10000px';
    slidesContainer.scrollLeft -= slideWidth;
});



