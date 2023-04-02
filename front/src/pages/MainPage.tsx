import { useRecoilValue } from "recoil";
import Form from "../components/Form";
import { dateState } from "../atoms";
import DateBeforeButton from "../components/DateBeforeButton";
import DateAfterButton from "../components/DateAfterButton";

function MainPage() {
  const date = useRecoilValue(dateState);
  const dateString = date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = date.toLocaleDateString("ko-KR", { weekday: "long" });
  return (
    <div className="bg-zinc-300 w-screen h-screen flex items-center justify-center">
      <DateBeforeButton />
      <div className="bg-white min-w-fit w-3/6 h-3/4 rounded-lg p-3 flex flex-col">
        <div className="border-b border-b-gray-300 pb-1">
          <span className="text-3xl font-bold"> {dateString} </span>
          <span className="text-xl text-gray-400"> {dayName} </span>
        </div>
        <Form />
      </div>
      <DateAfterButton />
    </div>
  );
}

export default MainPage;
