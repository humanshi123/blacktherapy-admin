"use client";
import React from 'react';

interface OverviewProps {
  icon: string | number; 
  title: string;
  value: number | string;
};
const DashboardCard: React.FC<OverviewProps> = ({ icon, title, value }) => {
    return (
      <>
        <div className="bg-white rounded-[10px] border border-[#c6e2f2] py-6 px-5 flex items-center gap-5">
       <div>
        <p className='h-[70px] w-[70px] rounded-full grid place-items-center border border-[#C7E4F4] bg-[#EEF7FC]  '>{icon}</p>
       </div>
       <div>
        <p className='leading-normal '>{title}</p>
        <h3 className='md:text-[28px]'>{value} </h3>
       </div>
        </div>
      </>
    );
  };
  
  export default DashboardCard;
  