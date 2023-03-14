import React, { useState } from "react";

function Form() {
  const [type, setType] = useState("");
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
  };
  const [content, setContent] = useState("");
  const handleContentInput = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setContent(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(type);
    console.log(content);
  };
  return (
    <form onSubmit={onSubmit}>
      <select name="type" onChange={handleSelect} value={type}>
        <option value="diet">🍚</option>
        <option value="exercise">💪</option>
        <option value="habitsTodo">✅</option>
        <option value="memo">💬</option>
      </select>
      <input
        onChange={handleContentInput}
        type="text"
        name="content"
        value={content}
        placeholder="Write anything you want"
      />
      <button type="submit">✔</button>
    </form>
  );
}

export default Form;
