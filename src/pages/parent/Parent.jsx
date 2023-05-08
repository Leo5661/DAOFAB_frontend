import { useQuery } from "@tanstack/react-query";
import { fetchPerent } from "../../api/FetchParent";
import { Link } from "react-router-dom";
import PageHandleButton from "../../components/PageHandleButton";
import { useState } from "react";

function Parent() {
  let [page, setPage] = useState(0);
  const limit = 2;
  const results = useQuery(["parents", page, limit], fetchPerent);
  if (results.isLoading) {
    return <div className="w-10/12 p-4 font-bold tracking-wide text-xl text-gray-600">Loading data</div>;
  }
  const data = results.data;
  const parent = data.content;

  const handleNextClick = () => {
    ++page
    setPage(page);
  }

  const handlePrevClick = () => {
    --page
    setPage(page);
  }

  const handleFirstClick = () => {
    setPage(0);
  }

  const handleLastClick = () => {
    setPage(data.totalPages-1);
  }

  return (
    <div className="flex justify-center items-center flex-col">
        <div className="w-10/12 p-4 font-bold tracking-wide text-xl text-gray-600">Parent Table</div>
        <div className="w-10/12 rounded-lg shadow-lg">
        <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-base uppercase tracking-wider text-gray-500">Id</th>
            <th scope="col" className="px-6 py-3 text-left text-base uppercase tracking-wider text-gray-500">Receiver</th>
            <th scope="col" className="px-6 py-3 text-left text-base uppercase tracking-wider text-gray-500">Sender</th>
            <th scope="col" className="px-6 py-3 text-left text-base uppercase tracking-wider text-gray-500">Total Amount</th>
            <th scope="col" className="px-6 py-3 text-left text-base uppercase tracking-wider text-gray-500">Total Paid Amount</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-x divide-gray-200">
        {parent.map((item) => {
            return (
              <tr key={item.id}>
                <td className="px-6 py-4">{item.id}</td>
                <td className="px-6 py-4">{item.sender}</td>
                <td className="px-6 py-4">{item.receiver}</td>
                <td className="px-6 py-4">{item.totalAmount}</td>
                <td>
                  <Link to={`/child/${item.id}`} className="w-full flex px-6 py-4">{item.totalPaidAmount}</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
        </div>
        <div className="w-10/12 p-4 flex justify-end">
            <PageHandleButton 
                currentPage={data.pageable.pageNumber+1} 
                totalPage={data.totalPages} 
                isFirst={data.first} 
                isLast={data.last}
                onNextClick={handleNextClick}
                onPreviousClick={handlePrevClick}
                onFirstClick={handleFirstClick}
                onLastClick={handleLastClick}    
            />
        </div>
    </div>
  );
}
export default Parent;
