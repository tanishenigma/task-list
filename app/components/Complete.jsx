"use client";
import { useEffect } from "react";
import CompletedList from "./CompletedList";
import { toast } from "sonner";

const Complete = ({ done, doneRemove, setDone }) => {
  useEffect(() => {
    if (done.length === 0) {
      toast("All tasks cleared!");
    }
  }, [done]);
  const removeAll = () => {
    setDone([]);
  };
  return (
    <div>
      {" "}
      <div className="flex items-center gap-x-5">
        <h1 className="text-3xl tracking-tighter font-bold font-strike ml-10">
          Completed Tasks
        </h1>
        {done.length !== 0 ? (
          <span
            className="bg-zinc-500/20 rounded-full inline-block text-sm p-3 hover:bg-red-500/20 hover:scale-110 duration-300 ease-in-out cursor-pointer text-white w-fit"
            onClick={() => {
              removeAll();
            }}>
            Clear All Tasks
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="m-5">
        {done.length === 0 ? (
          <p className="text-zinc-400 text-xl mt-5 ml-5">No Task Yet</p>
        ) : (
          <CompletedList done={done} doneRemove={doneRemove} />
        )}
      </div>
    </div>
  );
};

export default Complete;
