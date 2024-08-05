import React from 'react';
import { ButtonArrow } from '@/utils/svgicon';

const Page = () => {
    return (
        <div>
        <h1 className="font-antic text-[#283C63] text-[30px] leading-[1.2em] mb-[25px] lg:text-[40px] lg:mb-[50px]">
        Call Log
    </h1>
    <h2 className='mb-5'>Record New Call Details</h2>
    <div className=" bg-white rounded-[10px] w-full p-5">
      <form>
          <div className="add-clinician flex flex-wrap gap-[30px] ">
            <div className="">
              <label className="block mb-2">Related to Client</label>
              <select
                name="assignedClinician"
                value=""
                className=""
              >
                <option value="">--Select--</option>
                <option value="Clinician 1">Clinician 1</option>
                <option value="Clinician 2">Clinician 2</option>
                <option value="Clinician 3">Clinician 3</option>
              </select>
            </div>
            <div className="">
              <label className="block mb-2">Related to Clinician</label>
              <select
                name="assignedPeerSupport"
                value=""
                className=""
              >
                <option value="">--Select--</option>
                <option value="Peer 1">Peer 1</option>
                <option value="Peer 2">Peer 2</option>
                <option value="Peer 3">Peer 3</option>
              </select>
            </div>
            <div className="">
              <label className="block mb-2">Caller Phone</label>
              <input type="number" name="" id="" placeholder=""/>
            </div>
            <div className="">
              <label className="block mb-2">Caller Name</label>
              <input type="text" name="" id="" placeholder=""/>
            </div>
            <div className="">
              <label className="block mb-2">Subject</label>
              <input type="text" name="" id="" placeholder=""/>
            </div>
            <div className="!w-full">
              <label className="block mb-2">Notes</label>
              <textarea name="" id=""></textarea>
            </div>
            <div>
              <label className="block mb-2">Select Category</label>
              <select
                name="workshop"
                value=""
                className=""
              >
                <option value="">Select</option>
                <option value="Workshop 1">Workshop 1</option>
                <option value="Workshop 2">Workshop 2</option>
                <option value="Workshop 3">Workshop 3</option>
              </select>
            </div>
            <div className="">
              <label className="block mb-2">Date</label>
              <input type="date" name="" id="" placeholder="dd/mm/yyyy"/>
            </div>
            <div>
              <label className="block mb-2">Time</label>
              <input type="time" name="" id="" placeholder="+12346987"/>
            </div>
          </div>
         <div className='mt-[30px] flex justify-end '>
         <button type="submit" className="button px-[30px]">Log Call<ButtonArrow /> </button>
         </div>
        </form>
      </div>


    </div>
    );
}

export default Page;
