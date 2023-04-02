import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  contentState,
  contentWithTypeSelector,
  dateState,
  States,
  typesState,
} from "../atoms";

interface InterfaceForm {
  type: string;
  content: string;
}

function CreateContent() {
  const date = useRecoilValue(dateState);
  const [contents, setContents] = useRecoilState(contentState);
  const setContentWithTypeSelector = useSetRecoilState(contentWithTypeSelector);
  const types = useRecoilValue(typesState);
  const { register, handleSubmit, setValue } = useForm<InterfaceForm>();

  const handleValid = (data: InterfaceForm) => {
    if (
      Object.keys(contents).length === 0 ||
      Object.keys(contents).length !== types.length
    ) {
      // 최초 렌더링이거나 type이 새롭게 추가된 경우 types에서 값을 받아와서 셋팅
      setContentWithTypeSelector();
    }
    setContents((allContents) => {
      // allContents 받아와서 수정해야되는 key의 value만 가져와서 그 뒤에 붙여주기
      const newContent = {
        text: data.content,
        id: Date.now(),
        state: States.TODO,
        type: data.type,
        dueDate: date,
      };
      return {
        ...allContents,
        [data.type]: [...allContents[data.type], newContent],
      };
    });
    setValue("content", "");
  };
  return (
    <form
      onSubmit={handleSubmit(handleValid)}
      autoComplete="off"
      className="pt-1 min-w-fit flex"
    >
      <select {...register("type")} className="focus:outline-none p-1">
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
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
