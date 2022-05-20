const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const burgerSchema = new Schema(
  {
    name: String,
    price: String,
    image: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Burger = mongoose.model("Burger", burgerSchema);
module.exports = Burger;
