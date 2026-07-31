const express = require("express");
const router = express.Router();
const {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  changePriority,
} = require("../controllers/todoController");

router.route("/").get(getTodos).post(addTodo);
router.route("/:id").put(updateTodo).delete(deleteTodo);
router.route("/:id/priority").patch(changePriority);

module.exports = router;
