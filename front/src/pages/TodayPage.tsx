import { DragDropContext } from "react-beautiful-dnd";
import { useRecoilValue } from "recoil";
import {
  dietSelector,
  exerciseSelector,
  habitsTodoSelector,
  memoSelector,
} from "../atoms";
import List from "../components/List";

function TodayPage() {
  const onDragEnd = () => {};
  const dietContents = useRecoilValue(dietSelector);
  const exerciseContents = useRecoilValue(exerciseSelector);
  const habitsTodoContents = useRecoilValue(habitsTodoSelector);
  const memoContents = useRecoilValue(memoSelector);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="overflow-y-auto flex-1">
        {dietContents.length !== 0 && (
          <List title="🍚 Diet" contents={dietContents} />
        )}
        {exerciseContents.length !== 0 && (
          <List title="💪 Exercise" contents={exerciseContents} />
        )}
        {habitsTodoContents.length !== 0 && (
          <List title="✅ Habits & To Do" contents={habitsTodoContents} />
        )}
        {memoContents.length !== 0 && (
          <List title="💬 Memo" contents={memoContents} />
        )}
      </div>
    </DragDropContext>
  );
}

export default TodayPage;
