const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});



// accordian
const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const body = header.nextElementSibling;
    const icon = header.querySelector("svg");

    document.querySelectorAll(".accordion-body").forEach(item => {
      if (item !== body) {
        item.classList.add("hidden");
      }
    });

    document.querySelectorAll(".accordion-header svg").forEach(svg => {
      if (svg !== icon) {
        svg.classList.remove("rotate-180");
      }
    });

    body.classList.toggle("hidden");
    icon.classList.toggle("rotate-180");
  });
});




$(document).ready(function ($) {

  
  $('.project-slide').slick({
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-arrow-left text-2xl text-[#c9c9c9]"></i> </button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-arrow-right text-2xl text-[#c9c9c9]"></i></button>',
    appendArrows: $('#custom-arrows'),
    autoplay: true,
    autoplaySpeed: 3000,
  });




  $('.team-slider').slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,
    autoplay: true,
   autoplaySpeed: 3000, 
   responsive: [
     {
       breakpoint: 1024, 
       settings: {
         slidesToShow: 2,
       }
     },
     {
       breakpoint: 768, 
       settings: {
         slidesToShow: 1,
       }
     }
   ]
  });


  $('.story-slider').slick({
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });

})



let activeIndex = null;

function toggleAccordion(index) {
    if (activeIndex !== null && activeIndex !== index) {
        document.getElementById(`content-${activeIndex}`).classList.add('hidden');
        document.getElementById(`icon-${activeIndex}`).textContent = '+';
    }

    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    const isHidden = content.classList.contains('hidden');
    content.classList.toggle('hidden');
    icon.textContent = isHidden ? '–' : '+';

    activeIndex = isHidden ? index : null;
}