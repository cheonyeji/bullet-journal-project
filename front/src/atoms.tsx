import { atom } from "recoil";

export interface InterfaceContent {
  text: string;
  id: number;
  state: "TODO" | "DONE";
}

export const contentState = atom<InterfaceContent[]>({
  key: "content",
  default: [],
});
