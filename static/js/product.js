    function changeImage(el) {
      document.getElementById('mainImage').src = el.src;
    }



    let qty = 1;
    function changeQty(n) {
      qty = Math.max(1, qty + n);
      document.getElementById('quantity').textContent = qty;
    }

    function addToCart() {
      alert('✅ Product added to cart successfully!');
    }

    function buyNow() {
      alert('🛍️ Redirecting to checkout...');
    }

    // Activate variant buttons
    document.querySelectorAll('.variant-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.variant-btn').forEach(b => b.classList.remove('active', 'border-blue-500', 'bg-blue-50'));
        btn.classList.add('active', 'border-blue-500', 'bg-blue-50');
      });
    });