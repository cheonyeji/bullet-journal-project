import { InterfaceContent } from "../atoms";

function List({ text, state }: InterfaceContent) {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
  };
  return (
    <li>
      {state !== "TODO" && (
        <>
          <span className="line-through">{text}</span>
          <button name="TODO" onClick={onClick}>
            💫
          </button>
        </>
      )}

      {state === "TODO" && (
        <>
          <span>{text}</span>
          <button name="DONE" onClick={onClick}>
            💖
          </button>
        </>
      )}
    </li>
  );
}

export default List;
