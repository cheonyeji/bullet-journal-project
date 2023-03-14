import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

interface InterfaceForm {
  type: string;
  content: string;
}

interface InterfaceContent {
  text: string;
  id: number;
  category: "TODO" | "DONE";
}

const contentState = atom<InterfaceContent[]>({
  key: "content",
  default: [],
});

function Form() {
  const [contents, setContents] = useRecoilState(contentState);
  const { register, handleSubmit, setValue } = useForm<InterfaceForm>();
  const handleValid = (data: InterfaceForm) => {
    console.log(data.type, data.content);
    setContents((prevContents) => [
      { text: data.content, id: Date.now(), category: "TODO" },
      ...prevContents,
    ]);
    setValue("content", "");
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleValid)}>
        <select {...register("type")}>
          <option value="diet">🍚</option>
          <option value="exercise">💪</option>
          <option value="habitsTodo">✅</option>
          <option value="memo">💬</option>
        </select>
        <input
          {...register("content", { required: true })}
          type="text"
          placeholder="Write anything you want"
        />
        <button type="submit">✔</button>
      </form>
      <ul>
        {contents.map((content) => (
          <li key={content.id}>{content.text}</li>
        ))}
      </ul>
    </>
  );
}

export default Form;
