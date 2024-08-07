import React from 'react';
import { ButtonArrow } from '@/utils/svgicon';

const Page = () => {
    return (
        <div>
              <h1 className="font-antic text-[#283C63] text-[30px] leading-[1.2em] mb-[25px] lg:text-[40px] lg:mb-[50px]">
              Add New Client
    </h1>
    <div className=" bg-white rounded-[10px] w-full p-5">
      <form>
          <div className="add-clinician flex flex-wrap gap-[30px] ">
            <div className="md:!w-[calc(50%-30px)]">
              <label className="block mb-2">What type of service are you looking for?</label>
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
            <div className="md:!w-[calc(50%-30px)]">
              <label className="block mb-2">Want to check how much insurance will pay for?</label>
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
              <label className="block mb-2">First Name</label>
              <input type="text" name="" id="" placeholder="John"/>
            </div>
            <div className="">
              <label className="block mb-2">Last Name</label>
              <input type="text" name="" id="" placeholder="Doe"/>
            </div>
            <div className="">
              <label className="block mb-2">Date of Birth</label>
              <input type="date" name="" id="" placeholder="dd/mm/yyyy"/>
            </div>
            <div>
              <label className="block mb-2">Phone</label>
              <input type="number" name="" id="" placeholder="+12346987"/>
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input type="email" name="" id="" placeholder="emailaddress@mail.com"/>
            </div>
            <div>
              <label className="block mb-2">Password</label>
              <input type="password" name="" id="" placeholder="******"/>
            </div>
            <div>
              <label className="block mb-2">Confirm Password</label>
              <input type="password" name="" id="" placeholder="******"/>
            </div>
            <div>
              <label className="block mb-2">City</label>
              <select
                name="message"
                value=""
                className=""
              >
                <option value="">Select</option>
                <option value="Message 1">Message 1</option>
                <option value="Message 2">Message 2</option>
                <option value="Message 3">Message 3</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">State</label>
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
            <div>
              <label className="block mb-2">Zip Code</label>
              <input type="number" name="" id="" placeholder='124563'/>
            </div>
            <div>
            <label htmlFor="" className="block mb-2">Address line 1</label>
            <input type="text" name="" id="" className=""/>
            </div>
            <div>
            <label htmlFor="" className="block mb-2">Address line 2</label>
            <input type="text" name="" id="" className=""/>
            </div>
          </div>
         <div className='mt-[30px] flex justify-end '>
         <button type="submit" className="button px-[30px]">Add Now<ButtonArrow /> </button>
         </div>
        </form>
      </div>
        </div>
    );
}

export default Page;
