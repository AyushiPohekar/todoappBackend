import express from 'express';
import { addTodo,getallTodos,MarkTodoDone, UpdateTodo,deleteTodo } from '../controllers/todoController.js';

const route=express.Router();

route.post('/todos',addTodo)
route.get('/todos',getallTodos)
route.get('/todos/:id',MarkTodoDone)
route.put('/todos/:id',UpdateTodo)
route.delete('/todos/:id', deleteTodo);

export default route;
