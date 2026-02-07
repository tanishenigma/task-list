"use client";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };
  return (
    <div className="flex justify-center m-10">
      <form
        className="flex items-center rounded-xl p-2  bg-zinc-700/50 border border-zinc-400/40"
        onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="rounded-md p-2 text-xl bg-transparent focus-within:outline-none"
          placeholder="Add a task"
        />
        {text ? (
          <button type="submit">
            <PlusIcon className="mr-2 cursor-pointer" />
          </button>
        ) : (
          <PlusIcon className="mr-2 cursor-not-allowed text-zinc-600"></PlusIcon>
        )}
      </form>
    </div>
  );
};

export default AddTask;
