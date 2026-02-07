"use client";
import { CheckCircle, TrashIcon } from "lucide-react";

const CardComponent = ({ index, id, text, onRemove, onCheck }) => {
  return (
    <div className="flex flex-col bg-zinc-700/50 hover:bg-zinc-50/20 m-5 p-5 w-80 h-40  hover:scale-105 transition-all duration-200 hover:border hover:border-zinc-400/50 hover:transition-all hover:ease-in-out ease-in-out rounded-xl">
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Task {index + 1}</h1>
          <div className="flex gap-x-2">
            <TrashIcon
              className="hover:text-red-500 cursor-pointer w-5 h-5 hover:scale-125 ease-in-out transition-all duration-200  "
              onClick={() => {
                onRemove(id);
              }}
            />
            <CheckCircle
              className="hover:text-green-500 cursor-pointer w-5 h-5 hover:scale-125 ease-in-out transition-all duration-200 "
              onClick={() => {
                onCheck(text, id);
              }}
            />
          </div>
        </div>
        <p className="break-all">{text}</p>
      </div>
    </div>
  );
};

export default CardComponent;
