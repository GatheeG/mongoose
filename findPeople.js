// findPeople.js

const mongoose = require('mongoose');
const Person = require('./models/person');
require('dotenv').config();

// 🔌 Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ Connection error", err));

// 📌 Find all people
Person.find()
  .then((people) => {
    console.log("👥 All people in DB:");
    console.log(people);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("❌ Error finding people:", err);
    mongoose.connection.close();
  });
