// createPeople.js

const mongoose = require('mongoose');
const Person = require('./models/person'); // ✅ adjust path if different
require('dotenv').config(); // to use .env

// 🔌 Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ Connection error", err));

// 👥 Array of people to insert
const arrayOfPeople = [
  { name: "Ben", age: 26, favoriteFoods: ["Pasta", "Burger"] },
  { name: "Kefi", age: 15, favoriteFoods: ["Pizza", "Salad"] },
  { name: "Emilie", age: 40, favoriteFoods: ["Fries", "Chicken"] },
  { name: "Alex", age: 4, favoriteFoods: ["Milk"] },
  { name: "Denzel", age: 3, favoriteFoods: ["Cookies"] }
];

// ➕ Insert many people into the database
Person.create(arrayOfPeople)
  .then((data) => {
    console.log("✅ People added:", data);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("❌ Error adding people:", err);
    mongoose.connection.close();
  });
