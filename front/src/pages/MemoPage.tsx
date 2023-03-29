import { useRecoilValue } from "recoil";
import { memoSelector } from "../atoms";
import Item from "../components/Item";

function MemoPage() {
  const contents = useRecoilValue(memoSelector);
  return (
    <>
      <p className="text-xl font-bold">💬 Memo</p>
      <ul>
        {contents.map((content) => (
          <Item key={content.id} {...content} />
        ))}
      </ul>
    </>
  );
}

export default MemoPage;
