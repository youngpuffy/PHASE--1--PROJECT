document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");

fetch("http://localhost:3000/pictures")
  .then((response) => response.json())
  .then((products) => {
    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");

      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p><strong>Price:</strong> ksh${product.price}</p>
        <p><strong>Shelf:</strong> ${product["shelf number"]}</p>
        <p><strong>Row:</strong> ${product.row}</p>
      `;
      const img =productDiv.querySelector('img')
      img.addEventListener('click', ()=>{
         
        const imageModal = document.createElement('div');
        imageModal.classList.add('image-modal');
        imageModal.innerHTML =`
            <div class = "modal-content">
            <span class ="close-btn">&times;</span>
            <img src = "${product.image}" alt="${product.name}">
            <p><strong>${product.name}</strong></p>
            <p><strong>Price:</strong> ksh${product.price}</p>
             <p><strong>Shelf:</strong> ${product["shelf number"]}</p>
             <p><strong>Row:</strong> ${product.row}</p>
            <button class ="buy-btn">Buy now</button>
            <button class ="buy-btn">Add to cart</button>

             </div>
        `;
        document.body.appendChild(imageModal);

        const closeBtn = imageModal.querySelector('.close-btn');
        closeBtn.addEventListener('click', ()=>{
            document.body.removeChild(imageModal);
        });
      });
      productList.appendChild(productDiv)
    });
  })
  .catch((error) => console.error("Error fetching products:", error));

});