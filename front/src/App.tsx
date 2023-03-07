import React from "react";
import "./App.css";
import DietPage from "./pages/DietPage";
import ExercisePage from "./pages/ExercisePage";
import HabitsToDoPage from "./pages/HabitsToDoPage";
import MemoPage from "./pages/MemoPage";

function App() {
  return (
    <>
      <p className="text-3xl font-bold"> Today </p>
      <DietPage />
      <ExercisePage />
      <HabitsToDoPage />
      <MemoPage />
    </>
  );
}

export default App;
