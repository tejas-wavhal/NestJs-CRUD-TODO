import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Todo } from './schema/todo.schema';
import mongoose from 'mongoose'

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name)
    private todoModel: mongoose.Model<Todo>
  ) { }



  // Get All ToDo's
  async getToDos(): Promise<Todo[]> {
    const tasks = await this.todoModel.find()
    return tasks
  }


  // Create Todo
  async createTodo(toDo: Todo): Promise<Todo> {
    const task = await this.todoModel.create(toDo)
    return task
  }


  // Update ToDo
  async updateTodo(id: string, toDo: Todo): Promise<Todo> {
    const task = await this.todoModel.findByIdAndUpdate(
      id, toDo, { new: true, runValidators: true }
    )

    if (!task) throw new NotFoundException('Task not Found')

    return task
  }


  // Delete ToDo
  async deleteTodo(id: string): Promise<Todo> {
    const task = await this.todoModel.findByIdAndDelete(id)

    if (!task) throw new NotFoundException('Task not Found')

    return task
  }

}
