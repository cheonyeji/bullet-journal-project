import React from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });
  return (
    <>
      <div>
        <span className="text-3xl font-bold"> {dateString} </span>
        <span className="text-xl text-gray-400"> {dayName} </span>
      </div>
      <Form />
    </>
  );
}

export default App;
