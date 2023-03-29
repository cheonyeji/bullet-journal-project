import Form from "../components/Form";

function MainPage() {
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });
  return (
    <div className="bg-white min-w-fit w-3/6 h-3/4 rounded-lg p-3 flex flex-col">
      <div className="border-b border-b-gray-300 pb-1">
        <span className="text-3xl font-bold"> {dateString} </span>
        <span className="text-xl text-gray-400"> {dayName} </span>
      </div>
      <Form />
    </div>
  );
}

export default MainPage;
