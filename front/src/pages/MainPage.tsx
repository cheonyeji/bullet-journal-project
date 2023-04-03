import { useRecoilValue, useSetRecoilState } from "recoil";
import Form from "../components/Form";
import { contentState, dateState } from "../atoms";
import DateBeforeButton from "../components/DateBeforeButton";
import DateAfterButton from "../components/DateAfterButton";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

function MainPage() {
  const date = useRecoilValue(dateState);
  const dateString = date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = date.toLocaleDateString("ko-KR", { weekday: "long" });

  const setContents = useSetRecoilState(contentState);
  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;

    console.log(destination, source);
    if (destination.droppableId === source.droppableId) {
      // same type movement
      setContents((allContents) => {
        const contentsCopy = [...allContents[source.droppableId]];
        const contentObj = contentsCopy[source.index];
        contentsCopy.splice(source.index, 1);
        contentsCopy.splice(destination.index, 0, contentObj);

        return {
          ...allContents,
          [source.droppableId]: contentsCopy,
        };
      });
    }
    if (destination.droppableId !== source.droppableId) {
      // different type(cross) movement
      setContents((allContents) => {
        const sourceContentsCopy = [...allContents[source.droppableId]];
        const destinationContentsCopy = [
          ...allContents[destination.droppableId],
        ];
        const contentObj = {
          ...sourceContentsCopy[source.index],
          type: destination.droppableId,
        };
        sourceContentsCopy.splice(source.index, 1);
        destinationContentsCopy.splice(destination.index, 0, contentObj);

        return {
          ...allContents,
          [source.droppableId]: sourceContentsCopy,
          [destination.droppableId]: destinationContentsCopy,
        };
      });
    }

    if (destination.droppableId === "before") {
      console.log(destination, source);
    }
  };

  return (
    <div className="bg-zinc-300 w-screen h-screen flex items-center justify-center">
      <DragDropContext onDragEnd={onDragEnd}>
        <DateBeforeButton />
        <div className="bg-white min-w-fit w-3/6 h-3/4 rounded-lg p-3 flex flex-col">
          <div className="border-b border-b-gray-300 pb-1">
            <span className="text-3xl font-bold"> {dateString} </span>
            <span className="text-xl text-gray-400"> {dayName} </span>
          </div>
          <Form />
        </div>
        <DateAfterButton />
      </DragDropContext>
    </div>
  );
}

export default MainPage;
