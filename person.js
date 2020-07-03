let mongoose = require("mongoose");
let validtor = require("validator");
let Person = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  favoriteFoods: [
    {
      type: String,
    },
  ],
});
module.exports = mongoose.model("person", Person);
