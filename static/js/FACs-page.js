document.addEventListener("DOMContentLoaded", function () {
var cart = document.querySelector(".cart");
var mobileMenu = document.getElementById("mobile-menu");
var menuBtn = document.getElementById("mobile-menu-btn");
function open_close_cart() {
    cart.classList.toggle("active");
    }
if (menuBtn) {
    menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});
    }
    var loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
    loginBtn.onclick = function () {
    window.location.href = "../Sign-in.html";
};
}
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
    item.addEventListener("click", () => {
    item.classList.toggle("active");
});
});
const searchInput = document.getElementById("searchInput");
if (searchInput) {
    searchInput.addEventListener("input", function () {
    const value = this.value.toLowerCase();
    faqItems.forEach((item) => {
    const text = item.innerText.toLowerCase();
if (text.includes(value)) {
    item.style.display = "block";
} else {
    item.style.display = "none";
}
});
});
}
});
