import { Draggable } from "react-beautiful-dnd";
import { useSetRecoilState } from "recoil";
import { contentState, InterfaceContent } from "../atoms";

function Item({ text, state, type, id }: InterfaceContent) {
  const setContents = useSetRecoilState(contentState);
  const toggleState = (event: React.MouseEvent<HTMLButtonElement>) => {
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

  const removeItem = () => {
    setContents((prevContents) => {
      const targetIndex = prevContents.findIndex(
        (content) => content.id === id
      );
      return [
        ...prevContents.slice(0, targetIndex),
        ...prevContents.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <>
      {state !== "TODO" && (
        <Draggable draggableId={text} index={id}>
          {(provided) => (
            <li
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className="flex-1 group flex justify-between hover:shadow-sm"
            >
              <div>
                <button name="TODO" onClick={toggleState} className="mr-1">
                  ✔
                </button>
                <span className="line-through">{text}</span>
              </div>
              <button
                onClick={removeItem}
                className="hidden group-hover:inline"
              >
                🗑️
              </button>
            </li>
          )}
        </Draggable>
      )}

      {state === "TODO" && (
        <Draggable draggableId={text} index={id}>
          {(provided) => (
            <li
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className="flex-1 group flex justify-between hover:shadow-sm"
            >
              <div className="flex">
                <button name="DONE" onClick={toggleState} className="mr-1">
                  ◼
                </button>
                <span>{text}</span>
              </div>
              <button
                onClick={removeItem}
                className="hidden group-hover:inline"
              >
                🗑️
              </button>
            </li>
          )}
        </Draggable>
      )}
    </>
  );
}

export default Item;
