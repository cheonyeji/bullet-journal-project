import { useSetRecoilState } from "recoil";
import { dateState } from "../atoms";

function DateAfterButton() {
  const setDate = useSetRecoilState(dateState);
  const increaseDate = () => {
    setDate((prevDate) => {
      return new Date(
        prevDate.getFullYear(),
        prevDate.getMonth(),
        prevDate.getDate() + 1
      );
    });
  };
  return (
    <button onClick={increaseDate} className="ml-4 text-xl">
      {">"}
    </button>
  );
}

export default DateAfterButton;
