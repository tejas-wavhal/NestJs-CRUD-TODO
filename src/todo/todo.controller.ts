import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './schema/todo.schema';
import { ToDoDto } from './dto/toto.dto';

@Controller('todo') // prefix
export class TodoController {
  constructor(private todoService: TodoService) { }

  // Get All ToDo's
  @Get('all')
  async getTodos(): Promise<Todo[]> {
    return this.todoService.getToDos()
  }

  // Create Todo
  @Post('create')
  async createTodo(@Body() todoBody: ToDoDto): Promise<Todo> {
    return this.todoService.createTodo(todoBody)
  }

  // Update ToDo
  @Put(':id')
  async updateTodo(@Param('id') id: string, @Body() todoBody: ToDoDto): Promise<Todo> {
    return this.todoService.updateTodo(id, todoBody)
  }

  // Delete ToDo
  @Delete(':id')
  async deleteTodo(@Param('id') id: string): Promise<Todo> {
    return this.todoService.deleteTodo(id)
  }

}
