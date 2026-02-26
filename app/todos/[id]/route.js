import { writeFile } from "fs/promises";
import path from "path";
import todos from "../../../todo.json";

export async function GET(_, { params }) {
  const { id } = await params;
  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    return await Response.json({ error: "Todo not found" }, { status: 404 });
  }
  return Response.json(todo);
}

export async function PUT(request, { params }) {
  const updatedTodo = await request.json();
  const { id } = await params;
  const index = todos.findIndex((todo) => todo.id === id);

  if (index === -1) {
    return new Response("Todo not found", { status: 404 });
  }

  todos[index] = {
    ...todos[index],
    text: updatedTodo.text,
    completed: updatedTodo.completed,
  };
  try {
    const filePath = path.join(process.cwd(), "todo.json");
    await writeFile(filePath, JSON.stringify(todos, null, 2));
  } catch (error) {
    console.error("Error writing to todo.json:", error);
    return new Response("Failed to save changes to disk", { status: 500 });
  }
  return Response.json(todos[index]);
}

export async function DELETE(_, { params }) {
  const { id } = await params;
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  todos.splice(todoIndex, 1);
  await writeFile("todo.json", JSON.stringify(todos, null, 2));
  return new Response(null, { status: 204 });
}
