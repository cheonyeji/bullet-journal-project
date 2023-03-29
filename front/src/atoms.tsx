import { atom, selector } from "recoil";

export enum Types {
  "DIET" = "DIET",
  "EXERCISE" = "EXERCISE",
  "HABITS_TODO" = "HABITS_TODO",
  "MEMO" = "MEMO",
}

export enum States {
  "TODO" = "TODO",
  "DONE" = "DONE",
}

export interface InterfaceContent {
  text: string;
  id: number;
  state: States;
  type: Types;
}

export const contentState = atom<InterfaceContent[]>({
  key: "content",
  default: [],
});

// 추후 유저의 요구에 따라 분류type을 추가할 수 있게 되면 변경 필요한 부분
export const dietSelector = selector({
  key: "dietSelector",
  get: ({ get }) => {
    const contents = get(contentState);
    return contents.filter((content) => content.type === Types.DIET);
  },
});

export const exerciseSelector = selector({
  key: "exerciseSelector",
  get: ({ get }) => {
    const contents = get(contentState);
    return contents.filter((content) => content.type === Types.EXERCISE);
  },
});

export const habitsTodoSelector = selector({
  key: "habitsTodoSelector",
  get: ({ get }) => {
    const contents = get(contentState);
    return contents.filter((content) => content.type === Types.HABITS_TODO);
  },
});

export const memoSelector = selector({
  key: "memoSelector",
  get: ({ get }) => {
    const contents = get(contentState);
    return contents.filter((content) => content.type === Types.MEMO);
  },
});
