"use client";
import { useState } from "react";
import Complete from "./Complete";
import Incomplete from "./Incomplete";

const Card = ({ tasks, onRemove }) => {
  const [done, setDone] = useState([]);
  const onCheck = (text, id) => {
    const taskDone = {
      doneID: Date.now(),
      text: text,
    };
    setDone((prevDone) => [...prevDone, taskDone]);
    onRemove(id);
  };
  const doneRemove = (id) => {
    setDone((prevDone) => prevDone.filter((task) => task.doneID !== id));
  };

  return (
    <div className=" flex-col flex-1 justify-between ">
      <div className="flex flex-col flex-wrap m-5 ">
        <Incomplete tasks={tasks} onRemove={onRemove} onCheck={onCheck} />
      </div>
      <div className="flex flex-col flex-wrap m-5  ">
        <Complete setDone={setDone} done={done} doneRemove={doneRemove} />
      </div>
    </div>
  );
};

export default Card;
