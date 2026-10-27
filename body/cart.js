//Global cart variable for easy access
var cart = JSON.parse(localStorage.getItem("cart")) || [];

/*Name: addToCart
  Description: Adds a given item to the local storage
  Inputs: The product (object) to add and its size
  Outputs: None
*/
function addToCart(product, size) {
  cart = JSON.parse(localStorage.getItem("cart")) || [];

  let itemFound = cart.find(
    (item) => item.name == product.Name && item.size == size,
  );

  //If the item was in the cart already, increase its quantity
  if (itemFound) {
    itemFound.quantity++;
  }

  //Otherwise, push a new item with its details
  else {
    cart.push({
      name: product.Name,
      price: product.Price,
      size: size,
      quantity: 1,
      image: product.ImagePath,
    });
  }

  //Save the cart
  localStorage.setItem("cart", JSON.stringify(cart));
}

/*Name: bagAndGo
  Description: Adds an item to the cart and proceeds to checkout page
  Inputs: The product (object) to add and it's size
  Outputs: None
*/
function bagAndGo(product, size) {
  addToCart(product, size);
  window.location.href = "checkout.html";
}

/*Name: removeFromCart()
  Description: Removes a given item from the cart
  Inputs: The name of the product to remove and its size
  Outputs: None
*/
function removeFromCart(name, size) {
  let itemFound = cart.find((item) => item.name == name && item.size == size);

  //If the item isn't in the cart, return
  if (!itemFound) {
    console.error("Error, cannot find product:" + name);
    return;
  }

  //If there is more than one of the item in the cart, decrease its quantity
  else if (itemFound.quantity > 1) {
    itemFound.quantity--;
  }

  //Otherwise, do
  else {
    //If the cart is down to its last item, make it empty
    if (cart.length == 1) {
      cart = [];
    }
    //Otherwise, filter the item out
    else {
      cart = cart.filter((item) => item != itemFound);
    }
  }

  //Save the cart
  localStorage.setItem("cart", JSON.stringify(cart));
}

/*Name: clearCart()
  Description: Removes all items from the cart
  Inputs: None
  Outputs: None
*/
function clearCart() {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
}
