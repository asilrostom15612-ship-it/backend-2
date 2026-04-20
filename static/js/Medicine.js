var cart = document.querySelector('.cart');
const mobileMenu = document.getElementById('mobile-menu');
const menuBtn = document.getElementById('mobile-menu-btn');
function open_close_cart() {
    cart.classList.toggle("active");
}
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
document.getElementById("loginBtn").onclick = function () {
    window.location.href = "../Sign-in.html";
};
let cartCount = 0;
let totalPrice = 0;
let cartItems = {};
var cartCountSpan = document.querySelector(".cart-count");
var cartItemsContainer = document.querySelector(".items_in_cart");
var totalPriceElement = document.querySelector(".price_cart_toral");
var addButtons = document.querySelectorAll(".add-btn");
addButtons.forEach(button => {
    button.addEventListener("click", function () {
        const card = this.closest(".card");
        const productId = card.dataset.id;
        const productName = card.querySelector("h2").innerText;
        const productPriceText = card.querySelector(".price").innerText;
        const productImage = card.querySelector("img").src;
        const productPrice = parseFloat(productPriceText);
        if (cartItems[productId]) {
            cartItems[productId].quantity++;
            cartItems[productId].quantitySpan.innerText = cartItems[productId].quantity;
        } else {
            const newItem = document.createElement("div");
            newItem.classList.add("item_cart");
            newItem.innerHTML = `
                <img src="${productImage}">
                <div class="content">
                    <h4>${productName}</h4>
                    <p class="price_cart">${productPriceText}</p>
                    <div class="quantity_control">
                        <button class="decrease_quantity">-</button>
                        <span class="quantity">1</span>
                        <button class="increase_quantity">+</button>
                    </div>
                </div>
                <button class="delete_item"><i class="fa-solid fa-trash"></i></button>
            `;
            cartItemsContainer.appendChild(newItem);
            const increaseBtn = newItem.querySelector(".increase_quantity");
            const decreaseBtn = newItem.querySelector(".decrease_quantity");
            const quantitySpan = newItem.querySelector(".quantity");
            const deleteBtn = newItem.querySelector(".delete_item");
            cartItems[productId] = {
                quantity: 1,
                quantitySpan: quantitySpan,
                element: newItem,
                price: productPrice
            };
            increaseBtn.addEventListener("click", () => {
                cartItems[productId].quantity++;
                quantitySpan.innerText = cartItems[productId].quantity;
                cartCount++;
                totalPrice += productPrice;
                updateCart();
            });
            decreaseBtn.addEventListener("click", () => {
                if (cartItems[productId].quantity > 1) {
                    cartItems[productId].quantity--;
                    quantitySpan.innerText = cartItems[productId].quantity;
                    cartCount--;
                    totalPrice -= productPrice;
                } else {
                    newItem.remove();
                    cartCount--;
                    totalPrice -= productPrice;
                    delete cartItems[productId];
                }
                updateCart();
            });
            deleteBtn.addEventListener("click", () => {
                cartCount -= cartItems[productId].quantity;
                totalPrice -= productPrice * cartItems[productId].quantity;
                newItem.remove();
                delete cartItems[productId];
                updateCart();
            });
        }
        cartCount++;
        totalPrice += productPrice;
        updateCart();
    });
});
function updateCart() {
    cartCountSpan.innerText = cartCount;
    totalPriceElement.innerText = totalPrice.toFixed(2) + " EGP";
}
let buttons = document.querySelectorAll(".filters button");
let cards = document.querySelectorAll(".card");
buttons.forEach(button => {
    button.addEventListener("click", function () {
        buttons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
        let filter = this.getAttribute("data-filter");
        cards.forEach(card => {
            if (filter === "all") {
                card.style.display = "block";
            }
            else if (card.getAttribute("data-category") === filter) {
                card.style.display = "block";
            }
            else {
                card.style.display = "none";
            }
        });
    });
});