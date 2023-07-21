import express from "express";
import { addTodo,getAllTodos,getSingleTodo } from "../controller/todoController.js";
const route = express.Router();
route.post("/todos", addTodo);
route.get("/todos", getAllTodos);
route.get("/todos/:id", getSingleTodo);



export default route;
