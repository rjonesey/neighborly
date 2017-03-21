let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  name: String,
  bio: String,
  neighborhood: String
});

module.exports = mongoose.model('User', UserSchema);
