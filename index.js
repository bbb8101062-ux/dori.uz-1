let cart = [];
let total = 0;

// Savatchaga pitsa qo'shish funksiyasi
function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCartUI();
}

// Savatcha dizaynini yangilab turish
function updateCartUI() {
    // Savatchadagi pitsalar soni
    document.getElementById('cart-count').innerText = cart.length;
    
    const cartItemsContainer = document.getElementById('cartItems');
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; color: #999;">Savatchangiz hozircha bo\'sh.</p>';
    } else {
        cartItemsContainer.innerHTML = '';
        cart.forEach((item) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <span>${item.name}</span>
                <strong>${item.price.toLocaleString()} so'm</strong>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
    }
    
    // Umumiy summani yangilash
    document.getElementById('cart-total').innerText = total.toLocaleString();
}

// Savatcha oynasini ochish/yopish
function toggleCart() {
    const modal = document.getElementById('cartModal');
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
    }
}

// Buyurtma berish tugmasi bosilganda
function checkout() {
    if (cart.length === 0) {
        alert("Siz hali hech narsa tanlamadingiz!");
        return;
    }
    alert(`Rahmat! Buyurtmangiz qabul qilindi.\nJami summa: ${total.toLocaleString()} so'm.\nOperator tez orada aloqaga chiqadi.`);
    
    // Savatchani tozalash
    cart = [];
    total = 0;
    updateCartUI();
    toggleCart();
}