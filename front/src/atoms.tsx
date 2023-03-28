import { atom } from "recoil";

export interface InterfaceContent {
  text: string;
  id: number;
  state: "TODO" | "DONE";
  type: string;
}

export const contentState = atom<InterfaceContent[]>({
  key: "content",
  default: [],
});
