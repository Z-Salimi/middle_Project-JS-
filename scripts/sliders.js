let currentSlide = 0;
const slides = document.querySelectorAll("#slide");
const slideButton2 = document.getElementById("slide-button2");
const slideButton3 = document.getElementById("slide-button3");


function showSlide(index) {
  const slidesContainer = document.querySelector("#slider-container");
  
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  
}

// async function getRequest() {
//   try {
//     let response = await fetch(
//       `http://localhost:3000/auth/login`,
//       {
//         method: `post`,
//         headers: {
//           "Content-Type": "application/json",
//         },
       
//       }
//     )
//     window.location.href = "/auth/login"
//   } catch (error) {
//     console.log('Error:', error);
//   }
// }

document.getElementById("slider-button-next").addEventListener("click", (e)=>{
  currentSlide++;
  showSlide(currentSlide);
  slideButton2.className += " border-black/70";
});
document.getElementById("slider-button-next2").addEventListener("click", (e)=>{
  currentSlide++;
  showSlide(currentSlide);
  slideButton3.className += " border-black/70";
});


// function nextSlide() {
//   showSlide(currentSlide + 1);
// }

// function prevSlide() {
//   showSlide(currentSlide - 1);
// }