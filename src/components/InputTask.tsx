import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { inputTitleState, listToDosState } from "../store/atom";

const InputTask = () => {
  const [inputTitle, setInputTitle] = useRecoilState(inputTitleState);
  const [addTodo, setAddTodo] = useRecoilState(listToDosState);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputTitle(e.target.value);
    },
    [inputTitle]
  );

  const getKey = () => {
    return Math.random().toString(36).substring(2);
  };

  const handleClick = () => {
    setAddTodo([
      ...addTodo,
      { id: getKey(), title: inputTitle, isCompleted: false },
    ]);
    setInputTitle("");
  };

  return (
    <div className="flex mt-4">
      <input
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
        placeholder="Add Todo"
        value={inputTitle}
      />
      <button
        onClick={() => handleClick()}
        className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
      >
        Add
      </button>
    </div>
  );
};

export default InputTask;
