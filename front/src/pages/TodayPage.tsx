import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { contentState } from "../atoms";
import List from "../components/List";

function TodayPage() {
  const [contents, setContents] = useRecoilState(contentState);
  const onDragEnd = ({ destination, source }: DropResult) => {
    console.log(destination, source);
    if (!destination) return;
    if (destination.droppableId === source.droppableId) {
      // same type movement
      setContents((allContents) => {
        const contentsCopy = [...allContents[source.droppableId]];
        const contentObj = contentsCopy[source.index];

        contentsCopy.splice(source.index, 1);
        contentsCopy.splice(destination.index, 0, contentObj);
        const result = {
          ...allContents,
          [source.droppableId]: contentsCopy,
        };
        console.log(result);
        return result;
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
        const result = {
          ...allContents,
          [source.droppableId]: sourceContentsCopy,
          [destination.droppableId]: destinationContentsCopy,
        };
        console.log(result);
        return result;
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="overflow-y-auto flex-1">
        {Object.keys(contents).map(
          (type, index) =>
            contents[type].length !== 0 && (
              <List
                title={type}
                contents={contents[type]}
                listId={type}
                key={index}
              />
            )
        )}
      </div>
    </DragDropContext>
  );
}

export default TodayPage;
