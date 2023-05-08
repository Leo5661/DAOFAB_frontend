import { useParams } from "react-router";
import { fetchChild } from "../../assets/api/FetchChild";
import { useQuery } from "@tanstack/react-query";

function Child() {
  const { id } = useParams();
  const results = useQuery(["child", id], fetchChild);

  if (results.isLoading) {
    return <div>Loading data</div>;
  }
  const child = results.data;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Sender</th>
            <th scope="col">Receiver</th>
            <th scope="col">Total Amount</th>
            <th scope="col">Paid Amount</th>
          </tr>
        </thead>
        <tbody>
          {child.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.sender}</td>
                <td>{item.receiver}</td>
                <td>{item.totalAmount}</td>
                <td>{item.paidAmount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Child;
