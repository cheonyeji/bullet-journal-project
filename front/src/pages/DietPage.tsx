import { useRecoilValue } from "recoil";
import { dietSelector } from "../atoms";
import Item from "../components/Item";

function DietPage() {
  const contents = useRecoilValue(dietSelector);
  return (
    <>
      <p className="text-xl font-bold"> 🍚 Diet </p>
      <ul>
        {contents.map((content) => (
          <Item key={content.id} {...content} />
        ))}
      </ul>
    </>
  );
}

export default DietPage;
