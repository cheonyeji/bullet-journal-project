import CreateContent from "./CreateContent";
import TodayPage from "../pages/TodayPage";

function Form() {
  return (
    <div className="pt-1 flex flex-col flex-1 overflow-y-auto">
      <CreateContent />
      <TodayPage />
    </div>
  );
}

export default Form;
