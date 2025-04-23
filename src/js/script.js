const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});


const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
  link.addEventListener('click', function () {
    links.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});










$(document).ready(function () {
  $(".testimonial-content").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});











var normalMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Â© OpenStreetMap contributors'
});

var satelliteMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/' +
  'World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles Â© Esri'
});


var map = L.map('map', {
  center: [23.8948, 90.4086],
  zoom: 13,
  layers: [normalMap]
});



var baseMaps = {
  "Normal Map": normalMap,
  "Satellite Map": satelliteMap
};
L.control.layers(baseMaps).addTo(map);


var customIcon = L.divIcon({
  className: "",
  html: `
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="40" viewBox="0 0 26 40" fill="none">
      <path d="M13.1481 0.306519C6.3979 0.306519 0.922852 6.20125 0.922852 13.4718C0.922852 17.1933 4.28906 23.8571 4.28906 23.8571L12.6983 39.3226L21.4705 24.0363C21.4705 24.0363 25.3681 17.6788 25.3681 13.4718C25.3671 6.20125 19.8962 0.306519 13.1481 0.306519ZM13.0906 20.7254C9.22539 20.7254 6.09455 17.3294 6.09455 13.1338C6.09455 8.94501 9.22539 5.55018 13.0906 5.55018C16.9536 5.55018 20.0887 8.94388 20.0887 13.1338C20.0887 17.3294 16.9536 20.7254 13.0906 20.7254Z" fill="#FF0000"/>
    </svg>
  `,
  iconSize: [26, 40],
  iconAnchor: [13, 40] 
});


L.marker([23.8948, 90.4086], { icon: customIcon }).addTo(map)
  .bindPopup("Tongi, Gazipur");