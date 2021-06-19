# eShop

eShop is an eCommerce JavaScript application built using:

- Front End :

  - React
  - React-Router-Dom
  - Sass
  - Bootstrap

- Back End :
  - Node.js / Express.js
  - Passport.js / JWT (json web token) for user authentication
  - React Stripe.js for checkout and payment processing

<hr/>

As many businesses adapt to the growth of technology, they create their presence through an online store.

For my capstone project, I chose to develop in just two weeks an eCommerce application. I wanted to showcase and exercise all the skills I learned during my 12-week boot camp at BrainStation.

Some challenges I faced were developing the logic for a shopping cart to perform CRUD operations to Add, Increase, Decrease, and Remove items from the cart, implementing user authentication, and Stripe as a payment method.

Open routes allow the user to browse products and view product details as a Guest. The user can also add products to their cart stored on local storage as a Guest. I implemented Protected routes that grant access to Stripe payment if the user is registered and logged in using Passport.js and JWT(JSON web token) via session storage.

Stripe.js test data was also implemented to allow the user to input contact and credit card info upon checkout and pay for selected items.

<hr/>

Link to demo: https://e-shop-cp.herokuapp.com/

<hr/>

I am still actively working on eShop to :

- [*] refactor shopping cart CRUD operations for performace reasons on back end
- [ ] implement more features with Stripe such as discounts, payment methods (apple pay && google pay)
- [*] build on and add more to UX/UI for front end
- [*] eventually refactor categories and products displayed
- [*] deploy application to heroku
