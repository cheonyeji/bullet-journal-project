import Item from "../components/Item";
import { InterfaceContent } from "../atoms";

type ListProps = {
  title: string;
  contents: InterfaceContent[];
};
function List({ title, contents }: ListProps) {
  return (
    <div className="pt-1">
      <p className="text-xl font-bold"> {title}</p>
      <ul>
        {contents.map((content) => (
          <Item key={content.id} {...content} />
        ))}
      </ul>
    </div>
  );
}

export default List;
