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
  dueDate: Date;
}

type InterfaceContentState = {
  [key in string]: InterfaceContent[];
};

const today = new Date();
export const dateState = atom<Date>({
  key: "date",
  default: today,
});

export const typesState = atom<string[]>({
  key: "type",
  default: ["TASK", "DIET", "EXERCISE", "HABITS_TODO", "MEMO"],
});

export const contentState = atom<InterfaceContentState>({
  key: "content",
  default: {},
});

const isSameDate = (date1: Date, date2: Date) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

export const contentByDateSelector = selector({
  key: "contentByDateSelector",
  get: ({ get }) => {
    const contents = get(contentState);
    const date = get(dateState);
    const types = get(typesState);

    const contentByDate: InterfaceContentState = {};
    types.map((type) => (contentByDate[type] = []));

    Object.keys(contents).map(
      (type) =>
        (contentByDate[type] = contents[type].filter((content) =>
          isSameDate(content.dueDate, date)
        ))
    );
    return contentByDate;
  },
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
