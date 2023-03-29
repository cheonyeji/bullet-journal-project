import { useRecoilValue } from "recoil";
import { exerciseSelector } from "../atoms";
import Item from "../components/Item";

function ExercisePage() {
  const contents = useRecoilValue(exerciseSelector);
  return (
    <>
      <p className="text-xl font-bold">💪 Exercise </p>
      <ul>
        {contents.map((content) => (
          <Item key={content.id} {...content} />
        ))}
      </ul>
    </>
  );
}

export default ExercisePage;
