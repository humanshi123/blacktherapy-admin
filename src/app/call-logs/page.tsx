"use client";
import React, { useState } from 'react';
import deleteCross from "../../assets/images/deleteCross.png"
import Modal from 'react-modal';
import Image from "next/image";
import { ButtonArrow, DeleteIcon } from '@/utils/svgicon';
import ReactPaginate from 'react-paginate';
import success from "../../assets/images/succes.png"

interface CallData {
  id: number;
  client: string;
  clinician: string;
  phone: string;
  callerName: string;
  subject: string;
  notes: string;
  category: string;
  date: string;
  time: string;
}

const Page: React.FC = () => {
  const [calls, setCalls] = useState<CallData[]>([
    {
      id: 1,
      client: 'Client 1',
      clinician: 'Clinician 1',
      phone: '1234567890',
      callerName: 'John Doe',
      subject: 'Subject 1',
      notes: 'Some notes here',
      category: 'Category 1',
      date: '2023-08-01',
      time: '10:00'
    },
    {
      id: 2,
      client: 'Client 2',
      clinician: 'Clinician 2',
      phone: '0987654321',
      callerName: 'Jane Doe',
      subject: 'Subject 2',
      notes: 'Some other notes here',
      category: 'Category 2',
      date: '2023-08-02',
      time: '11:00'
    }
  ]);

  const [formData, setFormData] = useState<Omit<CallData, 'id'>>({
    client: '',
    clinician: '',
    phone: '',
    callerName: '',
    subject: '',
    notes: '',
    category: '',
    date: '',
    time: ''
  });

  const [currentPage, setCurrentPage] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const rowsPerPage = 4;
  const indexOfLastRow = (currentPage + 1) * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = calls.slice(indexOfFirstRow, indexOfFirstRow + rowsPerPage);
  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCall: CallData = { id: calls.length ? calls[calls.length - 1].id + 1 : 1, ...formData };
    setCalls([...calls, newCall]);
    setFormData({
      client: '',
      clinician: '',
      phone: '',
      callerName: '',
      subject: '',
      notes: '',
      category: '',
      date: '',
      time: ''
    });
    setNotification("Call Log Added Successfully");
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };
  

  const openModal = (id: number) => {
    setDeleteId(id);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setDeleteId(null);
  };

  const handleDelete = () => {
    setCalls(calls.filter(call => call.id !== deleteId));
    closeModal();
  };

  return (
    <div>
      <h1 className="font-antic text-[#283C63] text-[30px] leading-[1.2em] mb-[25px] lg:text-[40px] lg:mb-[50px]">
        Call Log
      </h1>
      <h2 className='mb-5'>Record New Call Details</h2>
      <div className="bg-white rounded-[10px] w-full p-5">
        <form onSubmit={handleSubmit}>
          <div className="add-clinician flex flex-wrap gap-[30px]">
            <div className="">
              <label className="block mb-2">Related to Client</label>
              <select
                name="client"
                value={formData.client}
                onChange={handleChange}
                className=""
              >
                <option value="">--Select--</option>
                <option value="Client 1">Client 1</option>
                <option value="Client 2">Client 2</option>
                <option value="Client 3">Client 3</option>
              </select>
            </div>
            <div className="">
              <label className="block mb-2">Related to Clinician</label>
              <select
                name="clinician"
                value={formData.clinician}
                onChange={handleChange}
                className=""
              >
                <option value="">--Select--</option>
                <option value="Clinician 1">Clinician 1</option>
                <option value="Clinician 2">Clinician 2</option>
                <option value="Clinician 3">Clinician 3</option>
              </select>
            </div>
            <div className="">
              <label className="block mb-2">Caller Phone</label>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="">
              <label className="block mb-2">Caller Name</label>
              <input
                type="text"
                name="callerName"
                value={formData.callerName}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="">
              <label className="block mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="!w-full">
              <label className="block mb-2">Notes</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
              ></textarea>
            </div>
            <div>
              <label className="block mb-2">Select Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className=""
              >
                <option value="">Select</option>
                <option value="Category 1">Category 1</option>
                <option value="Category 2">Category 2</option>
                <option value="Category 3">Category 3</option>
              </select>
            </div>
            <div className="">
              <label className="block mb-2">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="dd/mm/yyyy"
              />
            </div>
            <div>
              <label className="block mb-2">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                placeholder="+12346987"
              />
            </div>
          </div>
          <div className='mt-[30px] flex justify-end '>
            <button type="submit" className="button px-[30px]">
              Log Call<ButtonArrow />
            </button>
          </div>
        </form>
      </div>

      {notification && (
      <div className="fixed inset-0 grid place-items-center w-full h-full bg-gray-500 bg-opacity-75">
        <div className='bg-white text-[#283C63] py-[60px] rounded-[20px] shadow-lg max-w-[584px] w-full '>
         <Image src={success} alt='delete' height={130} width={115} className="mx-auto" />
       <h2 className='text-center mt-[40px]'> {notification}</h2>
        </div>
      </div>
    )}

      {/* Display Table */}
      <div className="table-common overflo-custom">
        <h2 className='mb-5  mt-[50px]'>All Users</h2>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th>ID</th>
              <th>Client</th>
              <th>Clinician</th>
              <th>Phone</th>
              <th>Caller Name</th>
              <th>Subject</th>
              <th>Notes</th>
              <th>Category</th>
              <th>Date</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {calls.map((call) => (
              <tr key={call.id}>
                <td>{call.id}</td>
                <td>{call.client}</td>
                <td>{call.clinician}</td>
                <td>{call.phone}</td>
                <td>{call.callerName}</td>
                <td>{call.subject}</td>
                <td>{call.notes}</td>
                <td>{call.category}</td>
                <td>{call.date}</td>
                <td>{call.time}</td>
                <td>
                  <button onClick={() => openModal(call.id)} className="text-red-500"><DeleteIcon /> </button>
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
        pageCount={Math.ceil(calls.length / rowsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={4}
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
      {/* Delete Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Delete Clinician"
        className="modal max-w-[584px] mx-auto bg-white rounded-xl w-full p-5 "
        overlayClassName="overlay"
      >
        <Image src={deleteCross} alt='delete' height={174} width={174} className="mx-auto" />
        <h2 className="text-[20px] text-center leading-normal mt-[-20px]">Are you sure you want to Delete?</h2>
   <div className="flex items-center justify-center gap-6 mt-8">
   <button 
          type="button"
          onClick={handleDelete}
          className="py-[10px] px-8 bg-[#CC0000] text-white rounded"
        >
          Yes, Delete
        </button>
        <button 
        type="button"
        onClick={closeModal}
        className='py-[10px] px-8 bg-[#283C63] text-white rounded'
        >
            No
        </button>
   </div>
      </Modal>
    </div>
  );
};

export default Page;
