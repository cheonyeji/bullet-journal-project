import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useSetRecoilState } from "recoil";
import { contentState, InterfaceContent } from "../atoms";

interface InterfaceItemProps extends InterfaceContent {
  index: number;
}

function Item({ text, state, type, id, index, dueDate }: InterfaceItemProps) {
  const setContents = useSetRecoilState(contentState);
  const toggleState = (event: React.MouseEvent<HTMLButtonElement>) => {
    setContents((allContents) => {
      const {
        currentTarget: { name },
      } = event;
      const targetIndex = allContents[type].findIndex(
        (content) => content.id === id
      );

      const copyTargetTypeContents = [...allContents[type]];
      const newContent = { text, id, type, dueDate, state: name as any };
      copyTargetTypeContents.splice(targetIndex, 1);
      copyTargetTypeContents.splice(targetIndex, 0, newContent);

      return {
        ...allContents,
        [type]: copyTargetTypeContents,
      };
    });
  };

  const removeItem = () => {
    setContents((allContents) => {
      const targetIndex = allContents[type].findIndex(
        (content) => content.id === id
      );
      const copyTargetTypeContents = [...allContents[type]];
      copyTargetTypeContents.splice(targetIndex, 1);

      return {
        ...allContents,
        [type]: copyTargetTypeContents,
      };
    });
  };
  return (
    <>
      {state !== "TODO" && (
        <Draggable draggableId={id + ""} index={index}>
          {(provided) => (
            <li
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className="flex-1 group flex justify-between hover:shadow-sm mb-1"
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
        <Draggable draggableId={text} index={index}>
          {(provided) => (
            <li
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className="flex-1 group flex justify-between hover:shadow-sm mb-1"
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

export default React.memo(Item);
