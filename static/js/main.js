
var cart = document.querySelector('.cart');
const mobileMenu = document.getElementById('mobile-menu');
const menuBtn = document.getElementById('mobile-menu-btn');


// عربه السلة 
function open_close_cart() {
    cart.classList.toggle("active");
}




//  زر المنيو 
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });




