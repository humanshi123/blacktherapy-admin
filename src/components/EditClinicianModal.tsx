import React from 'react';
import Modal from 'react-modal';

interface EditModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  formData: any;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const EditClinicianModal: React.FC<EditModalProps> = ({ isOpen, onRequestClose, formData, handleInputChange, handleFormSubmit }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Update Assignment"
      className="modal max-w-[800px] mx-auto bg-white rounded-xl w-full p-5"
      overlayClassName="overlay"
    >
      <h2 className="text-xl font-semibold mb-4">Update Assignment Information</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Assign Clinician</label>
            <select
              name="assignedClinician"
              value={formData.assignedClinician}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select</option>
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
              className="w-full p-2 border rounded"
            >
              <option value="">Select</option>
              <option value="Peer 1">Peer 1</option>
              <option value="Peer 2">Peer 2</option>
              <option value="Peer 3">Peer 3</option>
            </select>
          </div>
          <div>
            <label className="block mb-2">Message</label>
            <select
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select</option>
              <option value="Message 1">Message 1</option>
              <option value="Message 2">Message 2</option>
              <option value="Message 3">Message 3</option>
            </select>
          </div>
          <div>
            <label className="block mb-2">Workshop</label>
            <select
              name="workshop"
              value={formData.workshop}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select</option>
              <option value="Workshop 1">Workshop 1</option>
              <option value="Workshop 2">Workshop 2</option>
              <option value="Workshop 3">Workshop 3</option>
            </select>
          </div>
          <div>
            <label className="block mb-2">Video</label>
            <select
              name="video"
              value={formData.video}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select</option>
              <option value="Video 1">Video 1</option>
              <option value="Video 2">Video 2</option>
              <option value="Video 3">Video 3</option>
            </select>
          </div>
        </div>
        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">Submit</button>
      </form>
    </Modal>
  );
};

export default EditClinicianModal;
