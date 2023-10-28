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


  // map
  fetch('./map.json')
    .then((response) => response.json())
    .then((json) => {
  var rad = document.getElementsByName("radio");
  var prev = null;
  var territoryName = document.getElementById("territoryName");
  var territoryDescription = document.getElementById("territoryDescription");
  for (var i = 0; i < rad.length; i++) {
      rad[i].addEventListener('change', function() {
          (prev) ? console.log(): null;
          if (this !== prev) {
              prev = this;
          }
          let num = this.value;
          territoryName.innerText = json[num].title;
          territoryDescription.innerText = json[num].description;
      });
  }
  });

// Buying form
function buying(){

  event.preventDefault();
  let type = document.getElementById("product").value;
  let comments = document.getElementById("comments").value;
  let data = Array.from(document.querySelectorAll('#formElem input')).reduce((acc, input) => ({...acc, type, comments, [input.id]:input.value}), {});
  let sum = Number(data.type) * Number(data.quantity)
  
  const mailtoLink = `mailto:${data.email}?subject=${encodeURIComponent("Zoo tickets for " + data.name)}&body=${encodeURIComponent("Your " + data.quantity + " tickets will cost " + sum + "\n" + data.comments)}`;
  
  window.location.href = mailtoLink;

}

// 
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



