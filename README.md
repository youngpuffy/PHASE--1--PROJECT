# PHASE--1--PROJECT
This project is a web application where users can browse products, add them to their cart modify the quantites ot items, and complete the purchase.

## Features
- ** product gallery **: view products fetched from a JSON server
- ** Add to cart**: add products to shopping cart.
- ** cart functionality**:modify product quantities(increase/decrease),view total price, and proceed with the purchase
- ** Persistence**:cart doesnot change even after page is refreshed or reopened as items are stored in the localstorage
- ** Navigation**:user is able navigate through the homepage and cart page

## Project Structure
/home/levi/moringacoursework/code/phase-1/PHASE--1--PROJECT     /project-directory
index.html #main product gallery page
cart.html # cart page
style.css # styles for both pages
index.js # javascript file handling all logic
README.MD # this file

## setup and requirements
To run this project set up a local environment and make sure you have acces to a running JSON server.
--json-server  db.json--
## How to use
1. Adds products to the cart
Click the "Add to Cart" button next to each product on the index.html product page. A "View Cart" button will show up at the top-right of the page once the item has been put to the cart.
2. viewing the cart
You can view every item that has been added to your cart by clicking the "View Cart" button, which will take you to the cart page (cart.html).
3. modify product quantities in the cart
By using the "+" or "-" buttons on the cart page, you can change the amount of each item. The changed quantities will cause an automatic update to the total price.
4. completing the purchase
To make it look like you've finished the transaction, click the "Buy" button on the shopping page. You will be taken back to the product page after the cart has been cleared.

5. going back to the product page
To get back to the product gallery without completing a purchase, use the "Go Back" button on the shopping page

## How it works
Product page(index.html)
. Items are retrieved from a JSON server (operating at http://localhost:3000/pictures). 

. Every item includes details such as name, price, image, shelf number, and row. 

. Users have the ability to add products to their cart, and the cart information is saved in localStorage.

cart page(cart.html)
. The cart page shows all products that have been added, including their quantity and overall price.  

. Users have the ability to change the quantity of each item, and the cart will reflect those changes immediately.  

. Clicking the "Buy" button empties the cart and brings the user back to the product gallery.


## Technologies Used
HTML: structures the pages
CSS: styles the pages
Javascript: for handling logic interacting with the JSON server and updating the UI
JSON Server: used to mock the API and provide product data

## demo
test the wb application by following the instruction above to run the JSON Server and open the index.html and cart.html files in a browser

## contribution
you can fork the repository and submit pull requests if you'd like to contribute.

## License
### Section Explanation:
1. **Features**: Enumerates the primary features of the application.
2. **Project Structure**: Describes the project's files and directories.
3. **Setup and Requirements**: Explains how to launch the application and configure the local JSON server.
4. **How to Use**: Offers detailed instructions on how to use the application.
5. **How It Works**: Describes the reasoning behind the cart and product pages.
The technologies utilized in this project are listed in 6. **Technologies Used**: HTML, CSS, JavaScript, and JSON Server.
The project's local operation is explained in the seventh **Demo**.
8. **Contribution**: Details about how to help with the project.
9. **License**: Indicates the license that the project is made available under.
