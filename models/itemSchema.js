let mongoose = require('mongoose');

let ItemSchema = new mongoose.Schema({
  brand: String,
  description: String,
  category: String,
  condition: String
});

export default mongoose.model('Item', ItemSchema);
