import { useRecoilValue } from "recoil";
import { contentState } from "../atoms";
import CreateContent from "./CreateContent";
import List from "./List";

function Form() {
  const contents = useRecoilValue(contentState);
  return (
    <>
      <CreateContent />
      <ul>
        {contents.map((content) => (
          <List key={content.id} {...content} />
        ))}
      </ul>
    </>
  );
}

export default Form;
