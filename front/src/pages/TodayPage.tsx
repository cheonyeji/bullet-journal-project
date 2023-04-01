import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { contentState } from "../atoms";
import List from "../components/List";

function TodayPage() {
  const [contents, setContents] = useRecoilState(contentState);
  const onDragEnd = ({ destination, source, draggableId }: DropResult) => {
    console.log(destination, source, draggableId);
    if (!destination) return;
    if (destination.droppableId === source.droppableId) {
      // same type movement
      setContents((allContents) => {
        //const contentsCopy = [...allContents[source.droppableId]];]
        return allContents;
      });
    }
    if (destination.droppableId !== source.droppableId) {
      // different type(cross) movement
      setContents((allContents) => {
        console.log(allContents);
        return allContents;
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
