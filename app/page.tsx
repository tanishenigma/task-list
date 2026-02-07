"use client";
import { useState } from "react";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

interface Todo {
  id: number;
  text: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Todo[]>([]);

  const onAdd = (text: string): void => {
    const newTask: Todo = {
      id: Date.now(),
      text: text,
    };
    setTasks((prevTask) => [...prevTask, newTask]);
  };

  const onRemove = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  return (
    <div className="">
      <AddTask onAdd={onAdd} />
      <TodoList tasks={tasks} onRemove={onRemove} />
    </div>
  );
}
