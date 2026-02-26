"use client";
import CompletedCard from "./CompletedCard";

const CompletedList = ({ tasks, onToggle, onRemove }) => {
  return (
    <div className="flex flex-wrap gap-x-10 m-5 mt-0">
      {tasks.map((task) => (
        <CompletedCard
          key={task.id}
          id={task.id}
          text={task.text}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default CompletedList;
