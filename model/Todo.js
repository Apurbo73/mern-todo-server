import mongoose from "mongoose";
const todosSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const todo = mongoose.model("todo", todosSchema);
export default todo;
