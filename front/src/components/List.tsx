import Item from "../components/Item";
import { InterfaceContent } from "../atoms";
import { Droppable } from "react-beautiful-dnd";

type ListProps = {
  title: string;
  contents: InterfaceContent[];
};
function List({ title, contents }: ListProps) {
  return (
    <Droppable droppableId={title}>
      {(provided) => (
        <div className="pt-2">
          <p className="text-lg font-bold"> {title}</p>
          <ul ref={provided.innerRef} {...provided.droppableProps}>
            {contents.map((content) => (
              <Item key={content.id} {...content} />
            ))}
          </ul>
        </div>
      )}
    </Droppable>
  );
}

export default List;
