import Todo from "../model/Todo.js";

export const addTodo = async (request, response) => {
  try {
    const newTodo = await Todo.create({
      data: request.body.data,
      createdAt: Date.now(),
    });
    await newTodo.save();
    console.log(newTodo);
    return response.status(200).json(newTodo);
  } catch (error) {
    return response.status(400).json(error.message);
  }
};

export const getallTodos = async (request, response) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });
    return response.status(200).json(todos);
  } catch (error) {
    return response.status(400).json(error.message);
  }
};

export const MarkTodoDone = async (request, response) => {
  try {
    const TodoRef = await Todo.findById(request.params.id);

    const todo = await Todo.findByIdAndUpdate(
      { _id: request.params.id },
      { done: !TodoRef.done }
    );
    await todo.save();
    console.log(todo);
    return response.status(200).json(todo);
  } catch (error) {
    return response.status(400).json(error.message);
  }
};

export const UpdateTodo = async (request, response) => {
  try {
      await Todo.findOneAndUpdate(
          { _id: request.params.id },
          { data: request.body.data }
      )
      const updatedtodo = await Todo.findById(request.params.id);
  return response.status(200).json(updatedtodo);
  } catch (error) {
      return response.status(500).json(error.message);
  }
}

export const deleteTodo = async (request, response) => {
  try {
      const todo = await Todo.findByIdAndDelete(request.params.id)

      return response.status(200).json(todo);
  } catch (error) {
      return response.status(500).json(error.message);
  }
}
