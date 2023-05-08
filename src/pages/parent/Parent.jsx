import { useQuery } from "@tanstack/react-query";
import { fetchPerent } from "../../assets/api/FetchParent";
import { Link } from "react-router-dom";

function Parent() {
  const page = 0;
  const limit = 2;
  const results = useQuery(["parents", page, limit], fetchPerent);

  if (results.isLoading) {
    return <div>Loading data</div>;
  }
  const parent = results.data.content;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Sender</th>
            <th scope="col">Receiver</th>
            <th scope="col">Total Amount</th>
            <th scope="col">Total Paid Amount</th>
          </tr>
        </thead>
        <tbody>
          {parent.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.sender}</td>
                <td>{item.receiver}</td>
                <td>{item.totalAmount}</td>
                <td>
                  <Link to={`/child/${item.id}`}>{item.totalPaidAmount}</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Parent;
