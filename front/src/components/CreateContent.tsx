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
      ...prevContents,
      {
        text: data.content,
        id: Date.now(),
        state: States.TODO,
        type: data.type,
      },
    ]);
    setValue("content", "");
  };
  return (
    <form
      onSubmit={handleSubmit(handleValid)}
      autoComplete="off"
      className="pt-1 min-w-fit flex"
    >
      <select {...register("type")} className="focus:outline-none p-1">
        <option value={Types.DIET}>🍚</option>
        <option value={Types.EXERCISE}>💪</option>
        <option value={Types.HABITS_TODO}>✅</option>
        <option value={Types.MEMO}>💬</option>
      </select>
      <input
        {...register("content", { required: true })}
        type="text"
        placeholder="Write anything you want"
        className="focus:outline-none focus:bg-slate-100 flex-1 mr-2 p-1 placeholder:italic"
      />
      <button type="submit">✔</button>
    </form>
  );
}

export default CreateContent;
