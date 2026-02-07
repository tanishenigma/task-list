"use client";
import CompletedCard from "./CompletedCard";

const CompletedList = ({ done, doneRemove }) => {
  return (
    <div className="flex flex-wrap gap-x-10 m-5 mt-0">
      {done.map((task, index) => (
        <CompletedCard
          key={task.id}
          id={task.doneID}
          text={task.text}
          doneRemove={doneRemove}
          index={index}
        />
      ))}
    </div>
  );
};

export default CompletedList;
