const storeItems = {
  'Apple': 1.99,
  'Banana': 0.99,
  'Orange': 1.49,
  'Milk': 2.49
};

let cartTotal = 0;

function createStoreItems() {
  const storeItemsDiv = document.getElementById('store-items');
  
  for (const item in storeItems) {
    const button = document.createElement('button');
    const text = document.createTextNode(`${item} - $${storeItems[item]}`);
    button.appendChild(text);
    button.addEventListener('click', (event) => {
      addToCart(event);
    });
    storeItemsDiv.appendChild(button);
  }
}

function addToCart(event) {
  const itemText = event.target.textContent;
  const itemName = itemText.split(' - ')[0];
  const itemPrice = storeItems[itemName];
  
  const cartItem = document.createElement('li');
  const cartItemText = document.createTextNode(`${itemName} - $${itemPrice}`);
  cartItem.appendChild(cartItemText);
  
  const cart = document.getElementById('cart');
  cart.appendChild(cartItem);
  
  updateCartTotal(itemPrice);
}

function updateCartTotal(price) {
  cartTotal += price;
  const cartTotalElement = document.getElementById('cart-total');
  cartTotalElement.innerHTML = cartTotal.toFixed(2);
}

window.addEventListener('DOMContentLoaded', createStoreItems);