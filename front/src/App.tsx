import React from "react";
import "./App.css";
import Form from "./components/Form";
import DietPage from "./pages/DietPage";
import ExercisePage from "./pages/ExercisePage";
import HabitsToDoPage from "./pages/HabitsToDoPage";
import MemoPage from "./pages/MemoPage";

function App() {
  return (
    <>
      <p className="text-3xl font-bold"> Today </p>
      <Form />
      <DietPage />
      <ExercisePage />
      <HabitsToDoPage />
      <MemoPage />
    </>
  );
}

export default App;
