const router = require("express").Router();
const Burger = require("../models/Burger");

// first route for get all burgers
router.get("/", (req, res, next) => {
  Burger.find()
    .then((burgers) => {
      res.status(200).json(burgers);
    })
    .catch((err) => next(err));
});

// create new burger
router.post("/", (req, res, next) => {
  const { name, price, image, description } = req.body;
  Burger.create({ name, price, image, description })
    .then((burger) => {
      res.status(201).json(burger);
    })
    .catch((err) => next(err));
});

// get a spec.burger
router.get("/:id", (req, res, next) => {
  Burger.findById(req.params.id)
    .then((burger) => {
      if (!burger) {
        res.status(404).json(burger);
      } else {
        res.status(200).json(burger);
      }
    })
    .catch((err) => next(err));
});

// update a spec.burger
router.put("/:id", (req, res, next) => {
  const { name, price, image, description } = req.body;
  Burger.findByIdAndUpdate(
    req.params.id,
    {
      name,
      price,
      image,
      description,
    },
    { new: true }
  )
    .then((updatedBurger) => {
      res.status(200).json(updatedBurger);
    })
    .catch((err) => next(err));
});

// delete a spec.burger
router.delete("/:id", (req, res, next) => {
  Burger.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: "burger deleted" });
    })
    .catch((err) => next(err));
});

module.exports = router;
