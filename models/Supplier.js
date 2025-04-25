const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  address: String,
  email: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Supplier', supplierSchema);