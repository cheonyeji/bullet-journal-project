import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { contentByDateSelector, contentState } from "../atoms";
import List from "../components/List";

function TodayPage() {
  const setContents = useSetRecoilState(contentState);
  const contentByDate = useRecoilValue(contentByDateSelector);
  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;
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
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="overflow-y-auto flex-1">
        {Object.keys(contentByDate).map(
          (type, index) =>
            contentByDate[type].length !== 0 && (
              <List
                title={type}
                contents={contentByDate[type]}
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
