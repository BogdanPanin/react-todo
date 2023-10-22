import { useRecoilState, useRecoilValue } from "recoil";
import { listToDosState, listToDosStateLenght } from "../store/atom";
import { useRef } from "react";

const AddTask = () => {
  const [addTaskList, setAddTaskList] = useRecoilState(listToDosState);
  const taskLenght = useRecoilValue(listToDosStateLenght);
  const textElem = useRef<HTMLParagraphElement>(null);

  const removeTask = (id: string) => {
    const newTaskList = addTaskList.filter((task) => task.id !== id);
    setAddTaskList(newTaskList);
  };

  const doneClick = (id: string) => {
    const newPosts = addTaskList.map((taski) => ({
      ...taski,
      isCompleted:
        taski.id === id
          ? taski.isCompleted === false
          : taski.isCompleted === true,
    }));
    setAddTaskList(newPosts);
  };

  return (
    <div>
      <h1>You have {taskLenght} tasks</h1>
      {addTaskList?.map((task) => (
        <div className="flex my-4 items-center" key={task.id}>
          <p
            ref={textElem}
            className={
              task.isCompleted === true
                ? "line-through w-full text-grey-darkest"
                : "w-full text-grey-darkest"
            }
          >
            {task.title}
          </p>
          <button
            onClick={() => doneClick(task.id)}
            className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green"
          >
            Done
          </button>
          <button
            onClick={() => removeTask(task.id)}
            className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
          >
            Remove
          </button>
        </div>
      ))}

      {/* <div className="flex mb-4 items-center">
        <p className="w-full line-through text-green">
          Submit Todo App Component to Tailwind Components
        </p>
        <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey">
          Not Done
        </button>
        <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">
          Remove
        </button>
      </div> */}
    </div>
  );
};

export default AddTask;
