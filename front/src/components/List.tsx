import Item from "../components/Item";
import { InterfaceContent } from "../atoms";

type ListProps = {
  title: string;
  contents: InterfaceContent[];
};
function List({ title, contents }: ListProps) {
  return (
    <>
      <p className="text-xl font-bold"> {title}</p>
      <ul>
        {contents.map((content) => (
          <Item key={content.id} {...content} />
        ))}
      </ul>
    </>
  );
}

export default List;
