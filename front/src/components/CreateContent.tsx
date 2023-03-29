import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { contentState, States, Types } from "../atoms";

interface InterfaceForm {
  type: Types;
  content: string;
}

function CreateContent() {
  const setContents = useSetRecoilState(contentState);
  const { register, handleSubmit, setValue } = useForm<InterfaceForm>();
  const handleValid = (data: InterfaceForm) => {
    setContents((prevContents) => [
      {
        text: data.content,
        id: Date.now(),
        state: States.TODO,
        type: data.type,
      },
      ...prevContents,
    ]);
    setValue("content", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <select {...register("type")}>
        <option value={Types.DIET}>🍚</option>
        <option value={Types.EXERCISE}>💪</option>
        <option value={Types.HABITS_TODO}>✅</option>
        <option value={Types.MEMO}>💬</option>
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
