"use client";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import EditClinicianModal from "./EditClinicianModal";
import AssignTaskModal from "./AssignTaskModal";
import { DeleteIcon, EditIcon } from "@/utils/svgicon";
import deleteCross from "../assets/images/deleteCross.png"
import Modal from 'react-modal';
import Image from 'next/image';

interface TableData {
  id: number;
  status: string;
  training: string;
  name: string;
  contact: string;
  address: string;
  memberSince: string;
  noOfAppointments: number;
  accountStatus: boolean;
  status2: string;
}

const ClinicianTable: React.FC = () => {
  const data: TableData[] = [
    // Sample data
    {
      id: 1,
      status: "Active",
      training: "Training 1",
      name: "Clinician A",
      contact: "123456789",
      address: "Address 1",
      memberSince: "2021-01-01",
      noOfAppointments: 5,
      accountStatus: true,
      status2: "Interview Pending",
    },
    {
      id: 2,
      status: "Inactive",
      training: "Training 2",
      name: "Clinician B",
      contact: "987654321",
      address: "Address 2",
      memberSince: "2021-02-01",
      noOfAppointments: 3,
      accountStatus: false,
      status2: "Status ",
    },
    {
      id: 12,
      status: "Active",
      training: "Training 1",
      name: "Clinician A",
      contact: "123456789",
      address: "Address 1",
      memberSince: "2021-01-01",
      noOfAppointments: 5,
      accountStatus: true,
      status2: "Interview Pending",
    },
    {
      id: 13,
      status: "Inactive",
      training: "Training 2",
      name: "Clinician B",
      contact: "987654321",
      address: "Address 2",
      memberSince: "2021-02-01",
      noOfAppointments: 3,
      accountStatus: false,
      status2: "Applicant Reviewed",
    },
    // Add more data as needed
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAssignTaskModalOpen, setIsAssignTaskModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<TableData | null>(null);
  const [tableData, setTableData] = useState(data); // State to hold table data
  const rowsPerPage = 2;

  // Calculate the indexes for slicing the data array 
  const indexOfLastRow = (currentPage + 1) * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tableData.slice(
    indexOfFirstRow,
    indexOfFirstRow + rowsPerPage
  );
  const handleModalClose = () => {
    setIsDeleteModalOpen(false);
  };

  const handleToggleStatus = (id: number) => {
    setTableData(
      tableData.map((item) =>
        item.id === id ? { ...item, accountStatus: !item.accountStatus } : item
      )
    );
  };

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  const openEditModal = (row: TableData) => {
    setSelectedRow(row);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedRow(null);
  };

  const handleDelete = (row: TableData) => {
    setSelectedRow(row);
    setIsDeleteModalOpen(true);
  };
  const handleDeleteConfirm = () => {
    setTableData(tableData.filter((item) => item.id !== selectedRow?.id));
    handleModalClose();
  };
  const handleDeleteCancel = () => { 
    handleModalClose();
  };
  const openAssignTaskModal = (row: TableData) => {
    setSelectedRow(row);
    setIsAssignTaskModalOpen(true);
  };

  const closeAssignTaskModal = () => {
    setIsAssignTaskModalOpen(false);
    setSelectedRow(null);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (selectedRow) {
      const { name, value } = event.target;
      setSelectedRow({ ...selectedRow, [name]: value });
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement form submit logic here
    closeEditModal();
    closeAssignTaskModal();
  };

  return (
    <div>
    <div className="table-common overflo-custom">
      <table className="">
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Training</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Member Since</th>
            <th>No of Appointments</th>
            <th>Account Status</th>
            <th>Actions</th>
            <th>Assign Task</th>
            <th>Status2</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.status}</td>
              <td>{row.training}</td>
              <td>{row.name}</td>
              <td>{row.contact}</td>
              <td>{row.address}</td>
              <td>{row.memberSince}</td>
              <td>{row.noOfAppointments}</td>
              <td>
               <div className="toggle-checkbox relative">
               <input
                  type="checkbox"
                  checked={row.accountStatus}
                  onChange={() => handleToggleStatus(row.id)}
                  className="absolute opacity-0 z-[1] w-full h-full "
                />
                <span className="indicator ">
                  <span className="dot"></span>
                </span>
               </div>
              </td>
              <td>
                <div className="flex gap-2">
                <button
                  onClick={() => openEditModal(row)}
                  className=""
                > <EditIcon />
                </button>
                <button
                 onClick={() => handleDelete(row)}
                > <DeleteIcon />
                </button>
                </div>
              </td>
              <td>
                <button
                  onClick={() => openAssignTaskModal(row)}
                  className="font-gothamMedium rounded-3xl py-[2px] px-[10px] text-[#26395E] bg-[#CCDDFF] text-[10px] "
                >
                  Assign Task
                </button>
              </td>
              <td>
                <select
                  name="status2"
                  value={row.status2}
                  onChange={handleInputChange}
                  className="w-auto border-none h-auto bg-transparent p-0"
                >
                  <option value="Status">Status</option>
                  <option value="Applicant Reviewed">Applicant Reviewed</option>
                  <option value="Interview Pending">Interview Pending</option>
                  <option value="Incomplete Application">
                    Incomplete Application
                  </option>
                  <option value="Doesn't Meet Qualifications">
                    Doesnt Meet Qualifications
                  </option>
                </select>
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
        pageClassName={'text-[#26395e] '}  //list item
        pageLinkClassName ={'py-2 px-4 inline-block'} //anchor tag
        activeClassName={'bg-[#26395e] rounded-[5px] text-white'} //active anchor
        previousLinkClassName={'py-2 px-4 inline-block'}
        nextLinkClassName={'py-2 px-4 inline-block'}
        disabledClassName={'opacity-50 cursor-not-allowed'}
      />
      </div>
      <Modal
        isOpen={isDeleteModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Delete Clinician"
        className="modal max-w-[584px] mx-auto bg-white rounded-xl w-full p-5 bg-flower"
        overlayClassName="overlay"
      >
          <Image src={deleteCross} alt='delete' height={174} width={174} className="mx-auto" />
        <h2 className="text-[20px] text-center leading-normal mt-[-20px]">Are you sure you want to Delete?</h2>
   <div className="flex items-center justify-center gap-6 mt-8">
   <button 
          type="button"
          onClick={handleDeleteConfirm}
          className="py-[10px] px-8 bg-[#CC0000] text-white rounded"
        >
          Yes, Delete
        </button>
        <button 
        type="button"
        onClick={handleDeleteCancel}
        className='py-[10px] px-8 bg-[#283C63] text-white rounded'
        >
            No
        </button>
   </div>
      </Modal>

      {selectedRow && (
        <EditClinicianModal
          isOpen={isEditModalOpen}
          onRequestClose={closeEditModal}
          formData={selectedRow}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
        />
      )}
      {selectedRow && (
        <AssignTaskModal
          isOpen={isAssignTaskModalOpen}
          onRequestClose={closeAssignTaskModal}
          formData={selectedRow}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default ClinicianTable;
