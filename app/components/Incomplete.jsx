"use client";
import { useEffect } from "react";
import CardComponent from "./CardComponent";
import { toast } from "sonner";

const Incomplete = ({ tasks, onRemove, onCheck }) => {
  useEffect(() => {
    if (tasks.length == 0) {
      toast("Congrats! You Finished all the tasks.");
    }
  }, [tasks]);
  return (
    <div>
      <h1 className="flex text-3xl tracking-tighter font-bold ml-10 mb-0">
        Incomplete Tasks
      </h1>
      {tasks.length !== 0 ? (
        <div className="flex flex-wrap m-5 ">
          {tasks.map((t, index) => (
            <CardComponent
              key={t.id}
              id={t.id}
              text={t.text}
              onRemove={onRemove}
              index={index}
              onCheck={onCheck}
            />
          ))}
        </div>
      ) : (
        <p className="text-zinc-400 text-xl mt-5 ml-10 ">No Task Yet</p>
      )}
    </div>
  );
};

export default Incomplete;
