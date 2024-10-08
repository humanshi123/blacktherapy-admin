"use client";
import { useState } from "react";
import { usePathname } from 'next/navigation'; 
import { AddClientIcon, AssignmentIcon, CallIcon, ClientIcon, ClientWellIcon, ClinicianIcon, DashboardIcon, Humbruger, Logo, NewClinicianIcon, PaymentIcon, TaskIcon, LogOut } from "@/utils/svgicon";

import Link from "next/link";
import './SideNav.css';  
import { useRouter } from "next/navigation";

const SideNav = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    router.push('https://blacktherapy.vercel.app/');
  };

  const [isCollapsed, setIsCollapsed] = useState(false);
  

  const pathname = usePathname(); 

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed); 
  };
  const isActive = (path: string) => pathname === path ? 'active' : '';

  return (
    <div className={`sideNav ${isCollapsed ? 'collapsed' : ''} h-[100%] overflo-custom`}>
      <div className="">
        <div className="header min-h-[46px] justify-between gap-[10px]">
          {!isCollapsed && (
            <div className="logoContainer">
              <Link href="/">
                <Logo />
              </Link>
            </div>
          )}
          <button onClick={toggleSidebar} className="hamburgerButton">
            <Humbruger />
          </button>
        </div>
        <ul className="navList">
          <li className={isActive('/')}>
            <Link href="/">
              <DashboardIcon />
              {!isCollapsed && <span>Dashboard</span>}
            </Link>
          </li>
          <li className={isActive('/assignments')}>
            <Link href="/assignments">
              <AssignmentIcon />
              {!isCollapsed && <span>Assignments</span>}
            </Link>
          </li>
          <li className={isActive('/clinician')}>
            <Link href="/clinician">
              <ClinicianIcon />
              {!isCollapsed && <span>Clinician</span>}
            </Link>
          </li>
          <li className={isActive('/new-clinician')}>
            <Link href="/new-clinician">
             <NewClinicianIcon />
              {!isCollapsed && <span>Add New Clinician</span>}
            </Link>
          </li>
          <li className={isActive('/client-page')}>
            <Link href="/client-page">
              <ClientIcon />
              {!isCollapsed && <span>Client</span>}
            </Link>
          </li>
          <li className={isActive('/addnew-client')}>
            <Link href="/addnew-client">
             <AddClientIcon />
              {!isCollapsed && <span>Add New Client</span>}
            </Link>
          </li>
          <li className={isActive('/client-wellness')}>
          <Link href="/client-wellness">
              <ClientWellIcon/>
              {!isCollapsed && <span>Client Wellness</span>}
            </Link>
          </li>
          <li className={isActive('/add-users')}>
            <Link href="/add-users">
            <AddClientIcon />
              {!isCollapsed && <span>Add Users</span>}
            </Link>
          </li>
          <li className={isActive('/payment-request')}>
            <Link href="/payment-request">
              <PaymentIcon />
              {!isCollapsed && <span>Payment Requests</span>}
            </Link>
          </li>
          <li className={isActive('/view-task')}>
            <Link href="/view-task">
             <TaskIcon />
              {!isCollapsed && <span>View Task</span>}
            </Link>
          </li>
          {/* <li className={isActive('/call-logs')}>
          <Link href="/call-logs">
              <CallIcon />
              {!isCollapsed && <span>Call Log</span>}
            </Link>
          </li> */}
        </ul>
      </div>
      <div className="">
        <ul className="navList">
          <li className="!m-0">
            <a onClick={handleLogout} style={{ cursor: 'pointer' }}>
              <LogOut />
              {!isCollapsed && <span className="text-[#283C63] text-[600]">Log Out</span>}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
