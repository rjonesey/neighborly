import mongoose from 'mongoose';

let UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  neighborhood: String
});

export default mongoose.model('User', UserSchema);
