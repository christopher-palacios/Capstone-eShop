if (process.env.NODE_ENV !== "production") require("dotenv").config();
//import db connection
require("../config");
//imports
const User = require("../models/user");
const Category = require("../models/category");
const Product = require("../models/product");
const mongoose = require("mongoose");
const faker = require("faker");
const bmxProducts = require("../../data/bmxProducts");
const fixieProducts = require("../../data/fixieProducts");
const offRoadProducts = require("../../data/offRoadProducts");
const electricProducts = require("../../data/electricProducts");

const dbReset = async () => {
  try {
    //delete each collection
    const collections = Object.keys(mongoose.connection.collections);
    for (const collectionName of collections) {
      const collection = mongoose.connection.collections[collectionName];
      await collection.deleteMany();
    }
    //provide the number of documents for each collection for verification

    await User.countDocuments({}, function (err, count) {
      console.log(`Number of users: `, count);
    });
    await Category.countDocuments({}, function (err, count) {
      console.log(`Number of cateogries: `, count);
    });
    await Product.countDocuments({}, function (err, count) {
      console.log(`Number of products: `, count);
    });

    //create new users,  products

    // for (let i = 0; i < 5; i++) {
    //   const user = new User({
    //     firstName: `${faker.name.firstName()}`,
    //     lastName: `${faker.name.lastName()}`,
    //     email: faker.internet.email(),
    //     password: faker.internet.password(),
    //   });
    //   await user.save();
    // }

    //create new categories
    const categories = ["BMX", "Fixie", "Off Road", "Electric"];
    const categoryIds = [];

    for (let i = 0; i < categories.length; i++) {
      const category = new Category({
        name: categories[i],
      });
      await category.save();
      categoryIds.push(category._id);
    }

    //create new products for each category

    //create the array with the required info for each product
    //make a for loop for that array to create a new Product document for each item,
    //add the id of the category to each product

    //BMX Products for loop
    for (let i = 0; i < bmxProducts.length; i++) {
      const product = new Product({
        name: bmxProducts[i].name,
        price: bmxProducts[i].price,
        description: faker.commerce.productDescription(),
        link: bmxProducts[i].image_url,
        image: bmxProducts[i].image,
        category: bmxProducts[i].category,
        categoryId: categoryIds[0],
      });
      await product.save();
    }

    //Fixie Products for loop
    for (let i = 0; i < fixieProducts.length; i++) {
      const product = new Product({
        name: fixieProducts[i].name,
        price: fixieProducts[i].price,
        description: faker.commerce.productDescription(),
        link: fixieProducts[i].image_url,
        image: fixieProducts[i].image,
        category: fixieProducts[i].category,
        categoryId: categoryIds[1],
      });
      await product.save();
    }

    //Off Road Products for loop
    for (let i = 0; i < offRoadProducts.length; i++) {
      const product = new Product({
        name: offRoadProducts[i].name,
        price: offRoadProducts[i].price,
        description: faker.commerce.productDescription(),
        link: offRoadProducts[i].image_url,
        image: offRoadProducts[i].image,
        category: offRoadProducts[i].category,
        categoryId: categoryIds[2],
      });
      await product.save();
    }

    //Electric Products for loop
    for (let i = 0; i < electricProducts.length; i++) {
      const product = new Product({
        name: electricProducts[i].name,
        price: electricProducts[i].price,
        description: faker.commerce.productDescription(),
        link: electricProducts[i].image_url,
        image: electricProducts[i].image,
        category: electricProducts[i].category,
        categoryId: categoryIds[3],
      });
      await product.save();
    }

    //provide the number of documents for each collection for verification

    await User.countDocuments({}, function (err, count) {
      console.log(`Number of users: `, count);
    });
    await Category.countDocuments({}, function (err, count) {
      console.log(`Number of categories: `, count);
    });
    await Product.countDocuments({}, function (err, count) {
      console.log(`Number of products: `, count);
    });
  } catch (error) {
    console.log(error.message);
  }
};

dbReset();
