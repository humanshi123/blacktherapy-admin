import { useState } from 'react';
import { TableData } from './UnassignedClientTable';
import ReactPaginate from 'react-paginate';

interface AssignedClientsTableProps {
  data: TableData[];
  
}

const AssignedClientsTable: React.FC<AssignedClientsTableProps> = ({ data }) => {
const [currentPage, setCurrentPage] = useState(0);
const rowsPerPage = 4;

    const handlePageClick = (selectedItem: { selected: number }) => {
        setCurrentPage(selectedItem.selected);
    };



  return (
    <div>
    <div className="table-common">
      <table className="">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Client</th>
            <th className="py-2 px-4 border-b">Assigned Clinician</th>
            <th className="py-2 px-4 border-b">Assigned Peer Support</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td className="py-2 px-4 border-b">{row.id}</td>
              <td className="py-2 px-4 border-b">{row.client}</td>
              <td className="py-2 px-4 border-b">{row.assignedClinician}</td>
              <td className="py-2 px-4 border-b">{row.assignedPeerSupport}</td>
              <td className="py-2 px-4 border-b">{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="text-right">
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={Math.ceil(data.length / rowsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'inline-flex mt-[34px] rounded-[5px] border border-[#d5dce9]'}
        pageClassName={'text-[#26395e] '}  //list item
        pageLinkClassName ={'py-2 px-4 inline-block'} //anchor tag
        activeClassName={'bg-[#26395e] rounded-[5px] text-white'} //active anchor
        previousLinkClassName={'py-2 px-4 inline-block'}
        nextLinkClassName={'py-2 px-4 inline-block'}
        disabledClassName={'opacity-50 cursor-not-allowed'}
      />
      </div>
    </div>
  );
};

export default AssignedClientsTable; 
