"use client";
import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

interface Todo {
  id: number;
  text: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Todo[]>([]);

  //GET TODOS
  async function fetchTasks() {
    const res = await fetch("/todos");
    const data = await res.json();
    setTasks(data);
  }
  useEffect(() => {
    let isMounted = true;

    const loadTasks = async () => {
      const res = await fetch("/todos");
      const data = await res.json();
      if (isMounted) {
        setTasks(data);
      }
    };

    loadTasks();

    return () => {
      isMounted = false;
    };
  }, []);

  //ADD TODOS
  async function onAdd(text: string) {
    const newTask: Todo = {
      id: Date.now(),
      text: text,
    };
    setTasks((prevTask) => [...prevTask, newTask]);
    await fetch("/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, completed: false }),
    });
    fetchTasks();
  }

  //DELETE TODO
  async function onRemove(id: number) {
    await fetch(`/todos/${id}`, { method: "DELETE" });
    fetchTasks();
  }

  //TOGGLE COMPLETE
  async function onToggle(id: number, completed: boolean) {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    await fetch(`/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: task.text, completed: !completed }),
    });

    fetchTasks();
  }
  return (
    <div className="">
      <AddTask onAdd={onAdd} />
      <TodoList tasks={tasks} onRemove={onRemove} onToggle={onToggle} />
    </div>
  );
}
