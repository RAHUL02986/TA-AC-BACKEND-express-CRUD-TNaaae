const express = require("express");
let router = express.Router();
router.get("/new", (req, res) => {
  res.render("form");
});
router.post("/", (req, res) => {
  res.send(req.body);
});

router.get("/", (req, res) => {
  res.render("ls", { list: ["ankit", "suraj", "prashant", "ravi"] });
});

router.get("/:id", (req, res) => {
  res.render("studentDetail", {student: { name: "rahul", email: "rahul@altcampus.io" }});
});
