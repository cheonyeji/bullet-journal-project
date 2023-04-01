import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  Types,
  contentState,
  dietSelector,
  exerciseSelector,
  habitsTodoSelector,
  memoSelector,
} from "../atoms";
import List from "../components/List";

function TodayPage() {
  const setContents = useSetRecoilState(contentState);
  const onDragEnd = ({ destination, source, draggableId }: DropResult) => {
    console.log(destination, source, draggableId);
    if (!destination) return;
    if (destination.droppableId === source.droppableId) {
      // same type movement
      setContents((allContents) => {
        //const contentsCopy = [...allContents[source.droppableId]];]
        const contentsCopy = allContents.filter(
          (content) => content.type === source.droppableId
        );
        const targetContent = contentsCopy[source.index];
        contentsCopy.splice(source.index, 1);
        contentsCopy.splice(destination.index, 0, targetContent);
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
  const dietContents = useRecoilValue(dietSelector);
  const exerciseContents = useRecoilValue(exerciseSelector);
  const habitsTodoContents = useRecoilValue(habitsTodoSelector);
  const memoContents = useRecoilValue(memoSelector);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="overflow-y-auto flex-1">
        {dietContents.length !== 0 && (
          <List title="🍚 Diet" contents={dietContents} listId={Types.DIET} />
        )}
        {exerciseContents.length !== 0 && (
          <List
            title="💪 Exercise"
            contents={exerciseContents}
            listId={Types.EXERCISE}
          />
        )}
        {habitsTodoContents.length !== 0 && (
          <List
            title="✅ Habits & To Do"
            contents={habitsTodoContents}
            listId={Types.HABITS_TODO}
          />
        )}
        {memoContents.length !== 0 && (
          <List title="💬 Memo" contents={memoContents} listId={Types.MEMO} />
        )}
      </div>
    </DragDropContext>
  );
}

export default TodayPage;
