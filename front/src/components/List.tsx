import Item from "../components/Item";
import { InterfaceContent } from "../atoms";
import { Droppable } from "react-beautiful-dnd";

type ListProps = {
  title: string;
  contents: InterfaceContent[];
  listId: string;
};
function List({ title, contents, listId }: ListProps) {
  return (
    <Droppable droppableId={listId}>
      {(provided) => (
        <div className="pt-2">
          <p className="text-lg font-bold"> {title}</p>
          <ul ref={provided.innerRef} {...provided.droppableProps}>
            {contents.map((content, index) => (
              <Item key={content.id} index={index} {...content} />
            ))}
          </ul>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default List;
