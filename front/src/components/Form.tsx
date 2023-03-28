import CreateContent from "./CreateContent";
import { useRecoilValue } from "recoil";
import { contentState } from "../atoms";
import TodayPage from "../pages/TodayPage";

function Form() {
  const contents = useRecoilValue(contentState);
  return (
    <>
      <CreateContent />
      <ul>
        {contents.map((content) => (
          <TodayPage content={...content} />
        ))}
      </ul>
    </>
  );
}

export default Form;
