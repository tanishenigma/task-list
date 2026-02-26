import { writeFile } from "fs/promises";
import todos from "../../todo.json";

export function GET(request) {
  return Response.json(todos);
}

export async function POST(request) {
  const todo = await request.json();
  const newTodo = {
    id: crypto.randomUUID(),
    text: todo.text,
    completed: false,
  };
  todos.push(newTodo);
  writeFile("todo.json", JSON.stringify(todos, null, 3));
  return Response.json(todo, {
    status: 201,
  });
}
