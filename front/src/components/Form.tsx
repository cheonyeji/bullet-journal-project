import { useForm } from "react-hook-form";

interface InterfaceForm {
  type: string;
  content: string;
}

function Form() {
  const { register, handleSubmit, setValue } = useForm<InterfaceForm>();
  const handleValid = (data: InterfaceForm) => {
    console.log(data.type, data.content);
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

export default Form;
