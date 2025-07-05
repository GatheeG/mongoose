// findById.js

const mongoose = require('mongoose');
const Person = require('./models/person');
require('dotenv').config();

// Replace this with a real _id from your DB
const personId = 'YOUR_PERSON_ID_HERE';

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ Connected to MongoDB");

  return Person.findById(personId);
})
.then((person) => {
  if (!person) {
    console.log("❌ Person not found");
  } else {
    console.log("👤 Person found:");
    console.log(person);
  }
  mongoose.connection.close();
})
.catch((err) => {
  console.error("❌ Error:", err);
  mongoose.connection.close();
});
