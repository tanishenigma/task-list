"use client";
import Complete from "./Complete";
import Incomplete from "./Incomplete";

const Card = ({ tasks, onRemove, onToggle }) => {
  return (
    <div className=" flex-col flex-1 justify-between ">
      <div className="flex flex-col flex-wrap m-5 ">
        <Incomplete
          tasks={tasks.filter((task) => !task.completed)}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      </div>
      <div className="flex flex-col flex-wrap m-5  ">
        <Complete
          tasks={tasks.filter((task) => task.completed)}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      </div>
    </div>
  );
};

export default Card;
