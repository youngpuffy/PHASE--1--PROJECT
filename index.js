document.addEventListener("DOMContentLoaded", () => {

const apiUrl = "http://localhost:3000/pictures";
const cart = [];

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
        productImage.addEventListener('click', () => showProductDetails(product));

        const productName = document.createElement('p');
        productName.innerText = product.name;

        productItem.appendChild(productImage);
        productItem.appendChild(productName);

        gallery.appendChild(productItem);
    });
}

// Function to show product details when clicked
function showProductDetails(product) {
    const detailSection = document.getElementById('product-details');
    document.getElementById('detail-image').src = product.image;
    document.getElementById('detail-name').innerText = product.name;
    document.getElementById('detail-price').innerText = `Price: ksh${product.price}`;

    // Display the details section
    detailSection.style.display = 'block';
}
//set event listeners for the action buttons
document.getElementById('add-to-cart-button').onclick = function(){
  addToCart(product);
}

// Handle "Buy" button click
document.getElementById('buy-button').addEventListener('click', () => {
    alert("Proceeding to buy the product!");
});
// add product to the cart
function addToCart(product){
  cart.push(product);
  updatecartDisplay();
  alert(`${product.name} added to cart!`)
}
//update cart display
function updatecartDisplay(){
  const cartItems = document.getElementById('cart-items')
  cartItems.innerHTML ='';
   
  cart.forEach(product =>{
    const cartItem = document.createElement('div');
    cartItems.classList.add('cart-item');

    const cartImage = document.createElement('img');
    cartImage.src = product.image;
    cartItem.appendChild(cartImage);
    
    const cartName = document.createElement('p');
    cartName.innerText = product.name;
    cartItem.appendChild(cartName);

    cartItems.appendChild(cartItem);
  });
}
// Show Cart
document.getElementById('cart-button').addEventListener('click', () => {
  document.getElementById('cart').style.display = 'block';
});

// Close Cart
document.getElementById('close-cart-button').addEventListener('click', () => {
  document.getElementById('cart').style.display = 'none';
});

// Checkout Button Logic (for demo purposes)
document.getElementById('checkout-button').addEventListener('click', () => {
  alert('Proceeding to checkout...');

// // Handle "Add to Cart" button click
// document.getElementById('add-to-cart-button').addEventListener('click', () => {
//     alert("Product added to cart!");
// })
});
})