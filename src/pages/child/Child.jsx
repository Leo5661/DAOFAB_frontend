import { useParams } from "react-router";

function Child() {
  const { id } = useParams();

  return <div>Child of parent {id}</div>;
}

export default Child;
