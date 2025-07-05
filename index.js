// index.js

// Import mongoose and dotenv
const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));




const Person = require('./model');

// Create and save a person
const createPerson = async () => {
    const newPerson = new Person({
        name: 'John Doe',
        age: 30,
        favoriteFoods: ['Pizza', 'Pasta']
    });

    try {
        const savedPerson = await newPerson.save();
        console.log('✅ Person saved:', savedPerson);
    } catch (err) {
        console.error('❌ Error saving person:', err);
    }
};

createPerson();
