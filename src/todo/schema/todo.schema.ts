import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";



@Schema({
  timestamps: true
})

export class Todo {
  @Prop({ required: true })
  title: string

  @Prop()
  description: string

  @Prop({ default: false })
  isComplete: boolean
}

export const TodoSchema = SchemaFactory.createForClass(Todo)