var cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product, size) {
  console.log("ADDING", product.Name, size);
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  let itemFound = cart.find(
    (item) => item.name == product.Name && item.size == size,
  );
  if (itemFound) {
    itemFound.quantity++;
  } else {
    cart.push({
      name: product.Name,
      price: product.Price,
      size: size,
      quantity: 1,
      image: product.ImagePath,
    });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(cart);
}

function bagAndGo(product, size) {
  addToCart(product, size);
  window.location.href = "checkout.html";
}

function removeFromCart(name, size) {
  let itemFound = cart.find((item) => item.name == name && item.size == size);

  if (!itemFound) {
    console.error("Error, cannot find product:" + name);
    return;
  } else if (itemFound.quantity > 1) {
    itemFound.quantity--;
    return false;
  } else {
    if (cart.length == 1) localStorage.setItem("cart", JSON.stringify([]));
    else {
      let newCart = cart.filter((item) => item != itemFound);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  }

  return true;
}
