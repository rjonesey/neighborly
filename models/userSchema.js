let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  email: String,
  password: String
});

export default mongoose.model('User', UserSchema);
