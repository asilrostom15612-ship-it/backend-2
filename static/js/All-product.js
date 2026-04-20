
var cart = document.querySelector('.cart');
var filterCart = document.querySelector('.filter-cart');
const mobileMenu = document.getElementById('mobile-menu');
const menuBtn = document.getElementById('mobile-menu-btn');
function open_close_cart() {
    cart.classList.toggle("active");
}
function toggleCart() {
    filterCart.classList.toggle("activee");
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
// ================== SEARCH + FILTER + SORT ==================
const searchInput = document.querySelector(".search-box input");
const collegeFilter = document.getElementById("collegeFilter");
const collegeFilterr = document.getElementById("collegeFilterr"); // menu
const sortFilter = document.getElementById("sortFilter");
const sortFilterr = document.getElementById("sortFilterr"); // menu
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", filterProducts);
collegeFilter.addEventListener("change", filterProducts);
collegeFilterr.addEventListener("change", filterProducts);  // menu
sortFilterr.addEventListener("change", filterProducts);   // menu
sortFilter.addEventListener("change", filterProducts);

function filterProducts() {
    const searchValue = searchInput.value.toLowerCase();
    const selectedCollege = collegeFilter.value.toLowerCase();
    const selectedCollegee = collegeFilterr.value.toLowerCase();
    const selectedSortt = sortFilterr.value;
    const selectedSort = sortFilter.value;

    let visibleCards = [];

    cards.forEach(card => {
        const title = card.querySelector("h2").innerText.toLowerCase();
        const desc = card.querySelector("p").innerText.toLowerCase();
        const category = card.dataset.category.toLowerCase();

        const matchSearch = title.includes(searchValue) || desc.includes(searchValue);
        const matchCategory = selectedCollege === "all colleges" || category === selectedCollege;
        const matchCategoryy = selectedCollegee === "all colleges" || category === selectedCollegee;

        if (matchSearch && matchCategory && matchCategoryy) {
            card.style.display = "block";
            visibleCards.push(card);
        } else {
            card.style.display = "none";
        }
    });

    // Sorting
    if (selectedSort === "Low Price") {
        visibleCards.sort((a, b) => getPrice(a) - getPrice(b));
    } else if (selectedSort === "High Price") {
        visibleCards.sort((a, b) => getPrice(b) - getPrice(a));
    }

    // menu
    if (selectedSortt === "Low Price") {
        visibleCards.sort((a, b) => getPrice(a) - getPrice(b));
    } else if (selectedSortt === "High Price") {
        visibleCards.sort((a, b) => getPrice(b) - getPrice(a));
    }

    const container = document.querySelector(".cards");
    visibleCards.forEach(card => container.appendChild(card));
}

// helper function
function getPrice(card) {
    return parseFloat(card.querySelector(".price").innerText);
}