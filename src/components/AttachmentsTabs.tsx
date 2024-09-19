import { CloseIcon } from "@/utils/svgicon";
import React, { useState } from "react";
import Modal from "react-modal";

const initialData = [
  {
    title: "Yes",
    viewAttachments: [{ name: "attachment1.pdf", url: "#" }],
    userRole: "Current Balance",
  },
];

const AttachmentsTabs: React.FC = () => {
  const [data, setData] = useState(initialData);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    viewAttachments: [{ name: "", url: "" }],
    userRole: '',
  });

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newAttachments = [...formData.viewAttachments];
      newAttachments[index] = {
        name: files[0].name,
        url: URL.createObjectURL(files[0]),  // Create a preview URL for the file
      };
      setFormData({ ...formData, viewAttachments: newAttachments });
    }
  };

  const addMoreAttachments = () => {
    setFormData({
      ...formData,
      viewAttachments: [...formData.viewAttachments, { name: "", url: "" }],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setData([...data, formData]); // Add new data to the table
    setFormData({
      title: '',
      viewAttachments: [{ name: "", url: "" }],
      userRole: '',
    });
    closeModal();
  };

  return (
    <div>
      <div className="flex justify-end mb-[22px]">
        <button
          onClick={openModal}
          className="!text-sm !h-[40px] !px-[30px] button"
        >
          Add New
        </button>
      </div>
      <div className="table-common overflo-custom">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>View Attachments</th>
              <th>User Role</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.title}</td>
                <td>
                  {row.viewAttachments.map((file, fileIndex) => (
                    <a
                      key={fileIndex}
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {file.name}
                    </a>
                  ))}
                </td>
                <td>{row.userRole}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add New Entry"
        className="modal max-w-[810px] mx-auto rounded-[20px] w-full  max-h-[90vh] overflow-scroll overflo-custom "
        overlayClassName="w-full h-full fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
        ariaHideApp={false}
      >
        <div className="flex items-center justify-between rounded-t-[20px] py-[25px] px-[35px] bg-[#283C63]  ">
          <h2 className="font-gothamMedium !text-white">Add New</h2>
          <button onClick={closeModal}>
            <CloseIcon />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="bg-white px-[35px] py-10">
          <div className="grid grid-cols-2 gap-[30px] ">
            <div>
              <label className="block mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block mb-2">User Role</label>
              <input
                type="text"
                name="userRole"
                value={formData.userRole}
                onChange={handleInputChange}
              />
            </div>
            {formData.viewAttachments.map((attachment, index) => (
              <div key={index}>
                <label className="block mb-2">View Attachment {index + 1}</label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(index, e)}
                />
                {attachment.url && (
                  <a
                    href={attachment.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    {attachment.name}
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="mt-5">
            <button
              type="button"
              onClick={addMoreAttachments}
              className="flex items-center text-blue-500"
            >
              <span className="bg-[#283C63] text-white rounded-full w-[20px] h-[20px] flex items-center justify-center mr-2">+</span>
              Add More
            </button>
          </div>
          <div className="mt-10 flex justify-end">
            <button type="submit" className="button">
              Update
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AttachmentsTabs;
