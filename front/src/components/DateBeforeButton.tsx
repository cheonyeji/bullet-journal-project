import { useSetRecoilState } from "recoil";
import { dateState } from "../atoms";

function DateBeforeButton() {
  const setDate = useSetRecoilState(dateState);
  const decreaseDate = () => {
    setDate((prevDate) => {
      return new Date(
        prevDate.getFullYear(),
        prevDate.getMonth(),
        prevDate.getDate() - 1
      );
    });
  };
  return (
    <button onClick={decreaseDate} className="mr-4 text-xl">
      {"<"}
    </button>
  );
}

export default DateBeforeButton;
