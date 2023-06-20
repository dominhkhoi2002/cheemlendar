const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  name: { type: String, maxLength: 255 },
  password: { type: String, maxLength: 600 },
  // image: { type: String, maxLength: 255 },
  userid: { type: Number },
});

module.exports = mongoose.model('User', User);
