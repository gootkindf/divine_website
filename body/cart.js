const cart = JSON.parse(localStorage.getItem("cart")) || [];
function addToCart(product, size) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
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
}
