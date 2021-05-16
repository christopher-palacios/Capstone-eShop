# eShop

eShop is an eCommerce JavaScript application built using:

 * Front End :
    * React
    * React-Router-Dom
    * Sass
    * Bootstrap

 * Back End : 
    * Node.js / Express.js
    * Passport.js / JWT (json web token) for user authentication
    * React Stripe.js for checkout and payment processing
    
<hr/>

I chose to develop an eCommerce application for my capstone project to showcase and exercise all the skills 
(plus a few extra) that i learned during my 12 week bootcamp at BrainStation in just two weeks.

Some challenges faced were developing the logic for a shopping cart versus using a library to perform CRUD operations
to Add, Increase, Decrease, and Remove items from the cart.

Open routes allow user to browse products and view product details but I implemented Protected routes that grants access to adding items 
to the shoppint cart only if the user is registered and logged in using Passport.js and JWT(json web token) via session storage.

Stripe.js test data was also implemented to allow user to input contact and credit card info upon checkout and pay for selected items.

<hr/>

I am still actively working on eShop to :
  - [ ] refactor shopping cart CRUD operations for performace reasons on back end
  - [ ] implement more features with Stripe such as discounts, payment methods (apple pay && google pay)
  - [ ] build on and add more to UX/UI for front end
  - [ ] eventually refactor categories and products displayed
  - [ ] deploy application and add to portfolio

