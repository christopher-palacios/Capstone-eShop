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
const productList = require("../../data/productList");

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
    const categoryIds = [];
    let double = new Set();
    let catList = productList.map((product) => {
      return product.category;
    });
    //filter category names
    let newCategoryList = catList
      .filter((cat) => {
        let duplicate = double.has(cat);
        double.add(cat);
        return !duplicate;
      })
      .sort()
      .reverse();
    // loop through category names for seed
    for (let i = 0; i < newCategoryList.length; i++) {
      const category = new Category({
        name: newCategoryList[i],
      });
      await category.save();
      categoryIds.push(category._id);
    }
    //new ProductList seed by category name for category/:id
    for (let i = 0; i < productList.length; i++) {
      if (productList[i].category === "Women's clothing") {
        const product = new Product({
          name: productList[i].name,
          price: productList[i].price,
          description: productList[i].description,
          category: productList[i].category,
          categoryId: categoryIds[0],
          image: productList[i].image,
        });
        await product.save();
      } else if (productList[i].category === "Men's clothing") {
        const product = new Product({
          name: productList[i].name,
          price: productList[i].price,
          description: productList[i].description,
          category: productList[i].category,
          categoryId: categoryIds[1],
          image: productList[i].image,
        });
        await product.save();
      } else if (productList[i].category === "Jewelery") {
        const product = new Product({
          name: productList[i].name,
          price: productList[i].price,
          description: productList[i].description,
          category: productList[i].category,
          categoryId: categoryIds[2],
          image: productList[i].image,
        });
        await product.save();
      } else if (productList[i].category === "Electronics") {
        const product = new Product({
          name: productList[i].name,
          price: productList[i].price,
          description: productList[i].description,
          category: productList[i].category,
          categoryId: categoryIds[3],
          image: productList[i].image,
        });
        await product.save();
      }
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
