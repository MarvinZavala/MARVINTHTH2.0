const products = {
    apple: 1.5,
    banana: 1,
    milk: 2.5
  };

  const cart = ["apple", "banana", "apple"];

  function getCartTotal(cart, products) {
    let total = 0;
  
    for (let item of cart) {
      total += products[item];
    }
  
    return total;
  }

  console.log("Total: $" + getCartTotal(cart, products));