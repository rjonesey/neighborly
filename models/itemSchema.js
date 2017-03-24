let mongoose = require('mongoose');

let ItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  keyword: String
});

export default mongoose.model('Item', ItemSchema);
