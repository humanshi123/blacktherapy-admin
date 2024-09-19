import { CloseIcon } from "@/utils/svgicon";
import React, { act, useState } from "react";
import Modal from "react-modal";
import SearchBar from "./SearchBar";
import MobileHeader from "./MobileHeader";
import Image from "next/image";
import Client from "@/assets/images/clientpic.png";
import imgg from "@/assets/images/banner.jpg";
import PersonalInformationTab from "./PersonalInformationTab";
import ClientsAssignmentsTab from "./ClientsAssignmentsTab";
import ClientsInsurenceTab from "./ClientsInsurenceTab";
import BillingInformationTab from "./BillingInformationTab";
import ServiceAssignmentTab from "./ServiceAssignmentTab";
import AttachmentsTabs from "./AttachmentsTabs";
import ClientNotesTab from "./ClientNotesTab";

interface ClientDetailsPopupProps {
  isOpen: boolean;
  onRequestClose: () => void;
  clientId: string;
  clientName: string;
}

const ClientDetailsPopup: React.FC<ClientDetailsPopupProps> = ({
  isOpen,
  onRequestClose,
  clientId,
 clientName 
}) => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Delete Item"
      className="modal max-w-[1180px] mx-auto rounded-[20px] w-full  max-h-[90vh] overflow-scroll overflo-custom "
      overlayClassName="w-full h-full fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
    >
    <div className="flex items-center justify-between rounded-t-[20px] py-[25px] px-[35px] bg-[#283C63]  ">
        <h2 className="font-gothamMedium !text-white">Client Details</h2>
        <button onClick={onRequestClose}>
          <CloseIcon />{" "}
        </button>
      </div>
      <div className="py-[30px] bg-white px-[35px] ">
        <div className="flex items-center gap-[23px] mb-10">
            <div><Image src={Client} height={100} width={100} alt="Profile picture" className="rounded-full w-[100px] object-cover aspect-square " /> </div>
        <div>
            <h3 className="font-gothamBold">{clientName}</h3>
            <p>{clientId}</p>
        </div>
        </div>
            <div className="flex justify-between items-center gap-3 border-b border-[#CDE3F1] ">
          <button
            className={`font-gothamMedium pb-[15px] px-[5px] text-sm  ${
              activeTab === "tab1"
                ? "active !text-[#283c63]  border-b-2 border-[#283c63]"
                : ""
            } text-[#969696]`}
            onClick={() => handleTabClick("tab1")}
          >
            Personal Information
          </button>
          <button
            className={`font-gothamMedium pb-[15px] px-[5px] text-sm ${
              activeTab === "tab2"
                ? "active !text-[#283c63]  border-b-2 border-[#283c63]"
                : ""
            } text-[#969696]`}
            onClick={() => handleTabClick("tab2")}
          >
            Assignments
          </button>
          <button
            className={`font-gothamMedium pb-[15px] px-[5px] text-sm  ${
              activeTab === "tab3"
                ? "active !text-[#283c63]  border-b-2 border-[#283c63]"
                : ""
            } text-[#969696]`}
            onClick={() => handleTabClick("tab3")}
          >
            Insurance
          </button>
          <button
            className={`font-gothamMedium pb-[15px] px-[5px] text-sm ${
              activeTab === "tab4"
                ? "active !text-[#283c63]  border-b-2 border-[#283c63]"
                : ""
            } text-[#969696]`}
            onClick={() => handleTabClick("tab4")}
          >
            Billing Information
          </button>
          <button
            className={`font-gothamMedium pb-[15px] px-[5px] text-sm  ${
              activeTab === "tab5"
                ? "active !text-[#283c63]  border-b-2 border-[#283c63]"
                : ""
            } text-[#969696]`}
            onClick={() => handleTabClick("tab5")}
          >
            Service Assignment
          </button>
          <button
            className={`font-gothamMedium pb-[15px] px-[5px] text-sm ${
              activeTab === "tab6"
                ? "active !text-[#283c63]  border-b-2 border-[#283c63]"
                : ""
            } text-[#969696]`}
            onClick={() => handleTabClick("tab6")}
          >
            Attachments
          </button>
          <button
            className={`font-gothamMedium pb-[15px] px-[5px] text-sm  ${
              activeTab === "tab7"
                ? "active !text-[#283c63]  border-b-2 border-[#283c63]"
                : ""
            } text-[#969696]`}
            onClick={() => handleTabClick("tab7")}
          >
            Notes
          </button>
        </div>
        <div className="mt-[30px]">
          {activeTab === "tab1" && <PersonalInformationTab />}
          {activeTab === "tab2" && <ClientsAssignmentsTab />}
          {activeTab==="tab3" && <ClientsInsurenceTab />}
          {activeTab==="tab4" && <BillingInformationTab /> }
          {activeTab==="tab5" && <ServiceAssignmentTab /> }
          {activeTab==="tab6" && <AttachmentsTabs /> }
          {activeTab==="tab7" && <ClientNotesTab/> }
        </div>
      </div>
    </Modal>
  );
};

export default ClientDetailsPopup;
