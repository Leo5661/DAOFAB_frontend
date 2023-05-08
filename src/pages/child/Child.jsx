import { useParams } from "react-router";
import { fetchChild } from "../../assets/api/FetchChild";
import { useQuery } from "@tanstack/react-query";

function Child() {
  const { id } = useParams();
  const results = useQuery(["child", id], fetchChild);

  if (results.isLoading) {
    return <div className="w-10/12 p-4 font-bold tracking-wide text-xl text-gray-600">Loading data</div>;
  }
  const child = results.data;

  return (
    <div className="flex justify-center items-center flex-col">
        <div className="w-10/12 p-4 font-bold tracking-wide text-xl text-gray-600">Child Table</div>
        <div className="w-10/12 rounded-lg shadow-lg">
        <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-base uppercase tracking-wider text-gray-500" >Id</th>
            <th scope="col" className="px-6 py-3 text-left text-base uppercase tracking-wider text-gray-500" >Sender</th>
            <th scope="col" className="px-6 py-3 text-left text-base uppercase tracking-wider text-gray-500" >Receiver</th>
            <th scope="col" className="px-6 py-3 text-left text-base uppercase tracking-wider text-gray-500" >Total Amount</th>
            <th scope="col" className="px-6 py-3 text-left text-base uppercase tracking-wider text-gray-500" >Paid Amount</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-x divide-gray-200">
          {child.map((item) => {
            return (
              <tr key={item.id}>
                <td className="px-6 py-4" >{item.id}</td>
                <td className="px-6 py-4" >{item.sender}</td>
                <td className="px-6 py-4" >{item.receiver}</td>
                <td className="px-6 py-4" >{item.totalAmount}</td>
                <td className="px-6 py-4" >{item.paidAmount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
        </div> 
    </div>
  );
}

export default Child;
