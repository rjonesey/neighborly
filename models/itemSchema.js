import mongoose from 'mongoose';

let ItemSchema = new mongoose.Schema({
  description: String,
  category: String,
  condition: String,
  url: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

export default mongoose.model('Item', ItemSchema);
