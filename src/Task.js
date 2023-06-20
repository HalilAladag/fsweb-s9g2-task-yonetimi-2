import React from "react";
import { formatDistanceToNow, differenceInDays } from 'date-fns';
import {tr} from "date-fns/locale"

const Task = ({ taskObj, onComplete }) => {

  const formatDeadline = formatDistanceToNow
    (new Date(taskObj.deadline), 
    { addSuffix: true }, 
    {locale: tr }
  );
  const daysLeft = differenceInDays
    (new Date(taskObj.deadline), 
    new Date()
  ) <=3;
  

  return (
    <div className="bg-[#fff] shadow-md p-6 rounded leading-normal mt-4">
      <h3 className=" text-lg text-[#c8781a]">{taskObj.title}</h3>
      <div className=" text-xs pt-1 ">son teslim: <span className={daysLeft ? "bg-[#ffd9d4]" : "bg-[#d4d7ff]" }>{formatDeadline}</span></div>
      <p className=" pt-2 pb-0 pb-3 text-sm">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className=" inline-block py-1 px-3 text-sm mr-1 mb-1 rounded-3xl border border-solid border-gray-300" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
