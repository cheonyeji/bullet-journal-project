import React from "react";
import { useRecoilValue } from "recoil";
import {
  dietSelector,
  exerciseSelector,
  habitsTodoSelector,
  memoSelector,
} from "../atoms";
import DietPage from "./DietPage";
import ExercisePage from "./ExercisePage";
import HabitsToDoPage from "./HabitsToDoPage";
import MemoPage from "./MemoPage";

function TodayPage() {
  return (
    <>
      {useRecoilValue(dietSelector).length !== 0 && <DietPage />}
      {useRecoilValue(exerciseSelector).length !== 0 && <ExercisePage />}
      {useRecoilValue(habitsTodoSelector).length !== 0 && <HabitsToDoPage />}
      {useRecoilValue(memoSelector).length !== 0 && <MemoPage />}
    </>
  );
}

export default TodayPage;
