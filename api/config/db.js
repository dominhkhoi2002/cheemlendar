const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1/27017');
    console.log('Connect successful !!!!');
  } catch (error) {
    console.log('Error connecting');
  }
}

module.exports = { connect };
