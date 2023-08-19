const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  subject: { type: String, required: true },
  experience: { type: String, required: true },
  employeeCheck: { type: Boolean, required: true },
});

module.exports = mongoose.model('employee', userSchema);
