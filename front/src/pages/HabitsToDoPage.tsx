import { useRecoilValue } from "recoil";
import { habitsTodoSelector } from "../atoms";
import Item from "../components/Item";

function HabitsToDoPage() {
  const contents = useRecoilValue(habitsTodoSelector);
  return (
    <>
      <p className="text-xl font-bold"> ✅ Habits & To Do </p>
      <ul>
        {contents.map((content) => (
          <Item key={content.id} {...content} />
        ))}
      </ul>
    </>
  );
}

export default HabitsToDoPage;
