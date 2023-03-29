import { useRecoilValue } from "recoil";
import {
  dietSelector,
  exerciseSelector,
  habitsTodoSelector,
  memoSelector,
} from "../atoms";
import List from "../components/List";

function TodayPage() {
  const dietContents = useRecoilValue(dietSelector);
  const exerciseContents = useRecoilValue(exerciseSelector);
  const habitsTodoContents = useRecoilValue(habitsTodoSelector);
  const memoContents = useRecoilValue(memoSelector);
  return (
    <>
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
    </>
  );
}

export default TodayPage;
