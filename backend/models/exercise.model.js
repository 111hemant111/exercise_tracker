const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Decides the structure and conditions of database/collections
const exerciseSchema = new Schema({ //If you post values not present in this schema, it will simply ignore without error
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise; //export mongoose schema for exercises