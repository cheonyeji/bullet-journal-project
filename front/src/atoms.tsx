import { atom, selector } from "recoil";

export enum States {
  "TODO" = "TODO",
  "DONE" = "DONE",
}

export interface InterfaceContent {
  text: string;
  id: number;
  state: States;
  type: string;
}

type InterfaceContentState = {
  [key in string]: InterfaceContent[];
};

export const typesState = atom<string[]>({
  key: "type",
  default: ["TASK", "DIET", "EXERCISE", "HABITS_TODO", "MEMO"],
});

export const contentState = atom<InterfaceContentState>({
  key: "content",
  default: {},
});

export const contentWithTypeSelector = selector({
  key: "contentWithTypeSelector",
  get: () => {},
  set: ({ get, set }) => {
    const types = get(typesState);
    const newContent: InterfaceContentState = {};
    types.map((type) => (newContent[type] = []));
    set(contentState, newContent);
  },
});
