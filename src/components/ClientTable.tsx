"use client"
import { DeleteIcon } from '@/utils/svgicon';
import { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import deleteCross from "../assets/images/deleteCross.png"

interface TableData {
  id: string;
  status: string;
  clientName: string;
  contact: string;
  memberSince: string;
  assignments: number;
  actionss: string;
  accountStatus: boolean;
  action: boolean;


}

const ClientTable: React.FC = () => {
  const initialData: TableData[] = [
    {
      id: 'F123',
      status: 'Completed',
      clientName: 'Herry',
      contact: '1234567890',
      memberSince: '01 Jan 2020',
      assignments: 5,
      actionss: "Action",
      accountStatus: true,
      action: true,

    },
    {
        id: 'F545',
        status: 'Completed',
        clientName: 'Genny',
        contact: '1234567890',
        memberSince: '01 Jan 2020',
        assignments: 5,
        actionss: "Action",
        accountStatus: true,
        action: true,
      },
    // Add more data as needed
  ];

  const [data, setData] = useState<TableData[]>(initialData);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<TableData | null>(null);

  const handleToggleStatus = (id: string) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, accountStatus: !item.accountStatus } : item
      )
    );
  };

  const handleEdit = (row: TableData) => {
    setSelectedRow(row);
  };

  const handleDelete = (row: TableData) => {
    setSelectedRow(row);
    setIsDeleteModalOpen(true);
  };


  const handleModalClose = () => {
    setIsDeleteModalOpen(false);
  };

  const handleDeleteConfirm = () => {
    setData(data.filter((item) => item.id !== selectedRow?.id));
    handleModalClose();
  };
  const handleDeleteCancel = () => { 
    handleModalClose();
  };
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (selectedRow) {
      const { name, value } = event.target;
      setSelectedRow({ ...selectedRow, [name]: value });
    }
  };

  return (
    <div className="">
<div className='table-common overflo-custom'>
<table className="">
        <thead className="">
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Client</th>
            <th>Contact</th>
            <th>Member Since</th>
            <th>Assignments</th>
            <th>Actions</th>
            <th>Account Status</th>
            <th>Actions</th>
          </tr> 
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-b">
              <td>{row.id}</td>
              <td>
               <p className='font-gothamMedium rounded-3xl py-[2px] px-[10px] text-[#5E2626] bg-[#FFCCCC] text-[10px] '>{row.status}</p> </td>
              <td>{row.clientName}</td>
              <td>{row.contact}</td>
              <td>{row.memberSince}</td>
              <td>{row.assignments}</td>
              <td>
                <select
                  name="status2"
                  value={row.actionss}
                  onChange={handleInputChange}
                  className="border-none bg-transparent"
                >
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
              <td className="py-2 px-4">
                <label className="relative toggle-checkbox">
                  <input
                    type="checkbox"
                    checked={row.accountStatus}
                    onChange={() => handleToggleStatus(row.id)}
                    className="absolute opacity-0 z-[1] w-full h-full "
                  />
                  <span className="indicator ">
                  <span className="dot"></span>
                </span>


                </label>
              </td>
            
              <td className="py-2 px-4">
                {/* <button
                  onClick={() => handleEdit(row)}
                  className="text-blue-500 mr-2"
                >
                  Edit
                </button> */}
                <button
                  onClick={() => handleDelete(row)}
                  className="text-red-500"
                >
                 <DeleteIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
</div>


      {/* Delete Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Delete Clinician"
        className="modal max-w-[584px] mx-auto bg-white rounded-xl w-full p-5 "
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

    </div>
  );
};

export default ClientTable;
