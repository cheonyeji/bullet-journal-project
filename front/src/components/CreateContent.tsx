import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { contentState } from "../atoms";

interface InterfaceForm {
  type: string;
  content: string;
}

function CreateContent() {
  const setContents = useSetRecoilState(contentState);
  const { register, handleSubmit, setValue } = useForm<InterfaceForm>();
  const handleValid = (data: InterfaceForm) => {
    setContents((prevContents) => [
      { text: data.content, id: Date.now(), state: "TODO" },
      ...prevContents,
    ]);
    setValue("content", "");
  };
  return (
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
  );
}

export default CreateContent;
