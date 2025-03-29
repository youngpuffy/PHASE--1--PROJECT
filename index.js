document.addEventListener("DOMContentLoaded", () => {
  
 if(window.Location.pathname ==='/' ||window.location.pathname ==='/index.html'){
  loadIndexPage();
 }
 if(window.location.pathname ==='/cart.html'){
  loadCartPage();
 }

function loadIndexPage(){
  const apiUrl = "http://localhost:3000/pictures";
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Fetch products from JSON server
  fetch(apiUrl)
      .then(response => response.json())
      .then(products => {
          displayProducts(products);
      })
      .catch(error => console.error('Error fetching data:', error));


         // Function to display products
    function displayProducts(products) {
      const gallery = document.getElementById('product-gallery');
      gallery.innerHTML = '';

      products.forEach(product => {
          const productItem = document.createElement('div');
          productItem.classList.add('product-item');

          const productImage = document.createElement('img');
          productImage.src = product.image;
          productImage.alt = product.name;

          const productName = document.createElement('p');
          productName.innerText = `Name: ${product.name}`;

          const productPrice = document.createElement('p');
          productPrice.innerText = `Price: ksh${product.price}`;

          const productShelf = document.createElement('p');
          productShelf.innerText = `Shelf Number: ${product["shelf number"]}`;

          const productRow = document.createElement('p');
          productRow.innerText = `Row: ${product.row}`;

          const addToCartButton = document.createElement('button');
          addToCartButton.innerText = "Add to Cart";
          addToCartButton.onclick = () => addToCart(product);

          // Add product details to the product item
          productItem.appendChild(productImage);
          productItem.appendChild(productName);
          productItem.appendChild(productPrice);
          productItem.appendChild(productShelf);
          productItem.appendChild(productRow);
          productItem.appendChild(addToCartButton);

          gallery.appendChild(productItem);
      });
  }

  // Add product to the cart
  function addToCart(product) {
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${product.name} added to cart!`);
  }
  document.getElementById('cart-button').addEventListener('click', ()=>{
    window.location.href ='cart.html'
  });
}
function loadCartPage() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');

  // Function to display the cart items
  function displayCartItems() {
      cartItemsContainer.innerHTML = '';
      let total = 0;

      cart.forEach(product => {
          const cartItem = document.createElement('div');
          cartItem.classList.add('cart-item');

          const cartImage = document.createElement('img');
          cartImage.src = product.image;
          cartItem.appendChild(cartImage);

          const cartName = document.createElement('p');
          cartName.innerText = `${product.name}`;
          cartItem.appendChild(cartName);

          const cartPrice = document.createElement('p');
          cartPrice.innerText = `ksh${product.price}`;
          cartItem.appendChild(cartPrice);

          cartItemsContainer.appendChild(cartItem);

          // Calculate total price
          total += product.price;
      });

      // Update the total price in the cart
      totalPriceElement.innerText = total;
  }

  // Display the cart items and total price
  displayCartItems();

  // Close Cart button
  document.getElementById('close-cart-button').addEventListener('click', () => {
      window.location.href = 'index.html';  // Go back to the product gallery
  });

}
});
