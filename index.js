//to run both html files
document.addEventListener("DOMContentLoaded", () => {
  
  if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    loadIndexPage();
  }

  if (window.location.pathname === '/cart.html') {
    loadCartPage();
  }

  // Function to load index.hmtl
  function loadIndexPage() {
    const apiUrl = "http://localhost:3000/pictures";
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Fetch products from JSON server
    fetch(apiUrl)
      .then(response => response.json())
      .then(products => {
        displayProducts(products);
        updateViewCartButton(cart);
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
        productPrice.innerText = `Price: ksh ${product.price}`;

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

    // giving function to add to cart button
    function addToCart(product) {
      const existingProductIndex = cart.findIndex(item => item.id === product.id);
      if(existingProductIndex !== -1){
        cart[existingProductIndex].quantity += 1;
      }else{
        product.quantity = 1;
      cart.push(product);
    }
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${product.name} added to cart!`);
      updateViewCartButton(cart);
    }

    // Function show visibility of the cart button
    function updateViewCartButton(cart) {
      const viewCartButton = document.getElementById('view-cart-button');
      if (cart.length > 0) {
        viewCartButton.style.display = 'block'; // appears if cart has items
      } else {
        viewCartButton.style.display = 'none'; // is hidden when cart is empty
      }
    }

    // Dynamically create the "View Cart" button
    const viewCartButton = document.createElement('button');
    viewCartButton.innerText = "View Cart";
    viewCartButton.id = 'view-cart-button';
    viewCartButton.style.display = 'none'; // hidden at first

    viewCartButton.onclick = () => {
      window.location.href = 'cart.html'; // when button is clicked go to cart page
    };

    // Add the "View Cart" button to the page
    const buttonsContainer = document.querySelector('.buttons');
    buttonsContainer.appendChild(viewCartButton);
  }
    
  // Function to create what will be loaded in the cart
  function loadCartPage() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // how to display cart items
    function displayCartItems() {
      cartItemsContainer.innerHTML = ''; //ensure cart is empty first
      let total = 0;

      cart.forEach((product, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        const cartImage = document.createElement('img');
        cartImage.src = product.image;
        cartItem.appendChild(cartImage);

        const cartName = document.createElement('p');
        cartName.innerText = product.name;
        cartItem.appendChild(cartName);

        const cartPrice = document.createElement('p');
        cartPrice.innerText = `Ksh ${product.price} x (${product.quantity})`;
        cartItem.appendChild(cartPrice);

        const quantityContainer = document.createElement('div');
        const decreaseButton = document.createElement('button');
        decreaseButton.innerText = "-";

        const quantityInput = document.createElement('span');
        quantityInput.innerText = product.quantity;
        const increaseButton = document.createElement('button');
        increaseButton.innerText = "+";

                // Attach event listeners for increasing and decreasing quantity
        decreaseButton.onclick = () => updateQuantity(index, 'decrease');
        increaseButton.onclick = () => updateQuantity(index, 'increase');

        quantityContainer.appendChild(decreaseButton);
        quantityContainer.appendChild(quantityInput);
        quantityContainer.appendChild(increaseButton);

        cartItem.appendChild(quantityContainer);

        cartItemsContainer.appendChild(cartItem);

        // handle pricing
        total += product.price * product.quantity;
      });

      // final calculation of items
      totalPriceElement.innerText = total;
    }

        // Update quantity in the cart
        function updateQuantity(index, action) {
          if (action === 'increase') {
              cart[index].quantity += 1;
          } else if (action === 'decrease' && cart[index].quantity > 1) {
              cart[index].quantity -= 1;
          }

          // Update localStorage
          localStorage.setItem('cart', JSON.stringify(cart));
          displayCartItems(); // Re-render cart items to reflect changes
      }

    // show what has be done
    displayCartItems();

    // button to enable to go back to main page (even when not finished shopping)
    const goBackButton = document.getElementById('go-back-button');
    if (goBackButton) {
      goBackButton.addEventListener('click', () => {
        window.location.href = 'index.html';  
      });
    }

    //buy button
    const buyButton = document.getElementById('buy-button');
    if (buyButton) {
      buyButton.addEventListener('click', () => {
        alert('Thank you for your purchase!');
        localStorage.removeItem('cart'); 
        window.location.href = 'index.html'; 
      });
    }
  }
});

