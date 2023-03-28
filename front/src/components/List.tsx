import { useSetRecoilState } from "recoil";
import { contentState, InterfaceContent } from "../atoms";

function List({ text, state, type, id }: InterfaceContent) {
  const setContents = useSetRecoilState(contentState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setContents((prevContents) => {
      const targetIndex = prevContents.findIndex(
        (content) => content.id === id
      );
      const newContent = { text, id, type, state: name as any };
      return [
        ...prevContents.slice(0, targetIndex),
        newContent,
        ...prevContents.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      {state !== "TODO" && (
        <>
          <span className="line-through">{text}</span>
          <button name="TODO" onClick={onClick}>
            💫
          </button>
        </>
      )}

      {state === "TODO" && (
        <>
          <span>{text}</span>
          <button name="DONE" onClick={onClick}>
            💖
          </button>
        </>
      )}
    </li>
  );
}

export default List;
