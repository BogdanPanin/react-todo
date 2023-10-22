import { atom, selector } from "recoil";
import { Task } from "../types/Task";

export const inputTitleState = atom<string>({
  key: "inputTatleState",
  default: "",
});

export const listToDosState = atom<Array<Task>>({
  key: "listToDosState",
  default: [],
});

export const listToDosStateLenght = selector<number>({
  key: "listToDosStateLenght",
  get: ({ get }) => {
    const listToDosNumber: Array<Task> = get(listToDosState);
    return listToDosNumber?.length || 0;
  },
});
