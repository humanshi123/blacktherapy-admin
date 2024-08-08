import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Modal from 'react-modal';
import { ButtonArrow } from '@/utils/svgicon';

export interface TableData {
  id: number;
  client: string;
  assignedClinician: string;
  assignedPeerSupport: string;
  status: string;
  message?: string;
  workshop?: string;
  video?: string;
  dateAssigned?: string; // Added field for assigned date
}

interface AssignedClientsTableProps {
  data: TableData[];
  updateAssignedData: (updatedRow: TableData) => void;
}

const AssignedClientsTable: React.FC<AssignedClientsTableProps> = ({ data, updateAssignedData }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState<TableData | null>(null);
  const [formData, setFormData] = useState({
    assignedClinician: '',
    assignedPeerSupport: '',
    message: '',
    workshop: '',
    video: '',
  });

  const rowsPerPage = 4;

  const indexOfLastRow = (currentPage + 1) * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfFirstRow + rowsPerPage);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  const openModal = (row: TableData) => {
    setCurrentRow(row);
    setFormData({
      assignedClinician: row.assignedClinician || '',
      assignedPeerSupport: row.assignedPeerSupport || '',
      message: row.message || '',
      workshop: row.workshop || '',
      video: row.video || '',
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentRow) {
      const updatedRow = {
        ...currentRow,
        assignedClinician: formData.assignedClinician,
        assignedPeerSupport: formData.assignedPeerSupport,
        assignedDate: new Date().toISOString(), // Add the current date
      };

      updateAssignedData(updatedRow);
      closeModal();
    }
  };

  return (
    <div>
      <div className="table-common overflo-custom">
        <table className="">
          <thead>
            <tr>
              <th className="">ID</th>
              <th className="">Client</th>
              <th className="">Assigned Clinician</th>
              <th className="">Assigned Peer Support</th>
              <th className="">Assigned Date</th> {/* Added column for date */}
              <th className="">Status</th>
            
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row) => (
              <tr key={row.id}>
                <td className="">{row.id}</td>
                <td className="">{row.client}</td>
                <td className="">{row.assignedClinician}</td>
                <td className="">{row.assignedPeerSupport}</td>
                <td>{row.dateAssigned || 'N/A'}</td>
                {/* <td className="">{row.assignedDate ? new Date(row.assignedDate).toLocaleDateString() : 'N/A'}</td> Display date */}
                <td className="">
                  <button onClick={() => openModal(row)} className="font-gothamMedium rounded-3xl py-[2px] px-[10px] text-[#26395E] bg-[#CCDDFF] text-[10px] ">
                    Update Assignment
                  </button>
                </td>
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
          pageClassName={'text-[#26395e] '}
          pageLinkClassName={'py-2 px-4 inline-block'}
          activeClassName={'bg-[#26395e] rounded-[5px] text-white'}
          previousLinkClassName={'py-2 px-4 inline-block text-[#26395e] border-r border-[#d5dce9]'}
          nextLinkClassName={'py-2 px-4 inline-block text-[#26395e] border-l border-[#d5dce9]'}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Update Assignment"
        className="modal max-w-[800px] mx-auto bg-white rounded-xl w-full p-5"
        overlayClassName="overlay"
      >
        <h2 className="text-xl mb-4">Update Assignment Information</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Assign Clinician</label>
              <select
                name="assignedClinician"
                value={formData.assignedClinician}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-[10px] border-[#CDE3F1]"
              >
                <option value="">Select Clinician</option>
                <option value="Clinician 1">Clinician 1</option>
                <option value="Clinician 2">Clinician 2</option>
                <option value="Clinician 3">Clinician 3</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Assign Peer Support</label>
              <select
                name="assignedPeerSupport"
                value={formData.assignedPeerSupport}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-[10px] border-[#CDE3F1]"
              >
                <option value="">Select Peer Support</option>
                <option value="Peer 1">Peer 1</option>
                <option value="Peer 2">Peer 2</option>
                <option value="Peer 3">Peer 3</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Message</label>
              <select
                name="message"
                value={formData.message || ''}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-[10px] border-[#CDE3F1]"
              >
                <option value="">Select Message</option>
                <option value="Message 1">Message 1</option>
                <option value="Message 2">Message 2</option>
                <option value="Message 3">Message 3</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Workshop</label>
              <select
                name="workshop"
                value={formData.workshop || ''}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-[10px] border-[#CDE3F1]"
              >
                <option value="">Select Workshop</option>
                <option value="Workshop 1">Workshop 1</option>
                <option value="Workshop 2">Workshop 2</option>
                <option value="Workshop 3">Workshop 3</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Video</label>
              <select
                name="video"
                value={formData.video || ''}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-[10px] border-[#CDE3F1]"
              >
                <option value="">Select Video</option>
                <option value="Video 1">Video 1</option>
                <option value="Video 2">Video 2</option>
                <option value="Video 3">Video 3</option>
              </select>
            </div>
          </div>
          <div className='mt-[30px] flex justify-end'>
            <button type="submit" className="button px-[30px]">Submit <ButtonArrow /> </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AssignedClientsTable;
