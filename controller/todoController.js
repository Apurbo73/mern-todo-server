import todo from "../model/Todo.js";

export const addTodo = async (req, res) => {
  try {
    console.log(req.body);
    const newTodo = await todo.create({
      data: req.body.todo,
      createdAt: Date.now()
    });
    await newTodo.save();
    return res.status(200).json(newTodo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
export const getAllTodos = async (req, res) => {
  try {
    const todos = await todo.find({}).sort({ createdAt: -1 });
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getSingleTodo = async (req, res) => {
  try {
    const singleTodo = await todo.findById(req.params.id);
    return res.status(200).json(singleTodo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
 