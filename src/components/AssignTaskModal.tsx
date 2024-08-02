import React from 'react';
import Modal from 'react-modal';

interface AssignTaskModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  formData: any;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const AssignTaskModal: React.FC<AssignTaskModalProps> = ({ isOpen, onRequestClose, formData, handleInputChange, handleFormSubmit }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Assign Task"
      className="modal max-w-[800px] mx-auto bg-white rounded-xl w-full p-5"
      overlayClassName="overlay"
    >
      <h2 className="text-xl font-semibold mb-4">Assign Task</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Task Name</label>
            <input
              type="text"
              name="taskName"
              value={formData.taskName}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Assigned To</label>
            <input
              type="text"
              name="assignedTo"
              value={formData.assignedTo}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Priority</label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>
        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">Submit</button>
      </form>
    </Modal>
  );
};

export default AssignTaskModal;
