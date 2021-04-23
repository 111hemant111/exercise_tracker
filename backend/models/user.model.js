const mongoose = require('mongoose'); //import mongoose

const Schema = mongoose.Schema;

const userSchema = new Schema({ //creating user schema
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;