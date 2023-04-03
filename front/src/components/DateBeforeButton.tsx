import { useSetRecoilState } from "recoil";
import { dateState } from "../atoms";
import { Droppable } from "react-beautiful-dnd";

function DateBeforeButton() {
  const setDate = useSetRecoilState(dateState);

  const decreaseDate = () => {
    setDate((prevDate) => {
      return new Date(
        prevDate.getFullYear(),
        prevDate.getMonth(),
        prevDate.getDate() - 1
      );
    });
  };
  return (
    <Droppable droppableId="before">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <button onClick={decreaseDate} className="mr-4 text-xl">
            {"<"}
          </button>
        </div>
      )}
    </Droppable>
  );
}

export default DateBeforeButton;
