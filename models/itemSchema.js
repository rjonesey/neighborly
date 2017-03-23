let mongoose = require('mongoose');

let ItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ItemOwner'
  }
});

export default mongoose.model('Item', ItemSchema);
