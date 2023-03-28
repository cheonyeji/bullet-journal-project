import React from "react";
import { InterfaceContent } from "../atoms";
import DietPage from "./DietPage";
import ExercisePage from "./ExercisePage";
import HabitsToDoPage from "./HabitsToDoPage";
import MemoPage from "./MemoPage";

function TodayPage({ text, state, type, id }: InterfaceContent) {
  return (
    <>
      <DietPage {text}  />
      <ExercisePage />
      <HabitsToDoPage />
      <MemoPage />
    </>
  );
}

export default TodayPage;
