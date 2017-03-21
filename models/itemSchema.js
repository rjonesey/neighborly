let mongoose = require('mongoose');

let ItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ItemOwner'
  }
});

module.exports = mongoose.model('Item', ItemSchema);
