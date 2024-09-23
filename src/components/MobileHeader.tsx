"use client";
import { useState } from "react";
import { usePathname } from 'next/navigation'; 
import { AddClientIcon, AssignmentIcon, CallIcon, ClientIcon, ClientWellIcon, ClinicianIcon, DashboardIcon, Humbruger, Logo, NewClinicianIcon, PaymentIcon, TaskIcon, LogOut } from "@/utils/svgicon";
import Link from "next/link";
import './SideNav.css'; 
import { useRouter } from "next/navigation";

const MobileHeader = () => {
  const router = useRouter();
  const pathname = usePathname(); 
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    router.push('https://blacktherapy.vercel.app/');
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const isActive = (path: string) => pathname === path ? 'active' : '';

  const handleLinkClick = (path: string) => {
    setIsCollapsed(false); // Collapse sidebar after clicking a link
  };

  return (
    <>
      <div className="header min-h-[46px] justify-between gap-[10px] py-[10px] px-[15px] bg-white">
        <div className="logoContainer">
          <Link href="/" onClick={() => handleLinkClick("/")}>
            <Logo />
          </Link>
        </div>
        <button onClick={toggleSidebar} className="hamburgerButton">
          <Humbruger />
        </button>
      </div>

      <div className={`sideNav ${isCollapsed ? 'collapsed' : ''} h-[100%] overflo-custom`}>
        <div className="">
          <ul className="navList">
            <li className={isActive('/')}>
              <Link href="/" onClick={() => handleLinkClick("/")}>
                <DashboardIcon />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className={isActive('/assignments')}>
              <Link href="/assignments" onClick={() => handleLinkClick("/assignments")}>
                <AssignmentIcon />
                <span>Assignments</span>
              </Link>
            </li>
            <li className={isActive('/clinician')}>
              <Link href="/clinician" onClick={() => handleLinkClick("/clinician")}>
                <ClinicianIcon />
                <span>Clinician</span>
              </Link>
            </li>
            <li className={isActive('/new-clinician')}>
              <Link href="/new-clinician" onClick={() => handleLinkClick("/new-clinician")}>
                <NewClinicianIcon />
                <span>Add New Clinician</span>
              </Link>
            </li>
            <li className={isActive('/client-page')}>
              <Link href="/client-page" onClick={() => handleLinkClick("/client-page")}>
                <ClientIcon />
                <span>Client</span>
              </Link>
            </li>
            <li className={isActive('/addnew-client')}>
              <Link href="/addnew-client" onClick={() => handleLinkClick("/addnew-client")}>
                <AddClientIcon />
                <span>Add New Client</span>
              </Link>
            </li>
            <li className={isActive('/client-wellness')}>
              <Link href="/client-wellness" onClick={() => handleLinkClick("/client-wellness")}>
                <ClientWellIcon />
                <span>Client Wellness</span>
              </Link>
            </li>
            <li className={isActive('/add-users')}>
              <Link href="/add-users" onClick={() => handleLinkClick("/add-users")}>
                <AddClientIcon />
                <span>Add Users</span>
              </Link>
            </li>
            <li className={isActive('/payment-request')}>
              <Link href="/payment-request" onClick={() => handleLinkClick("/payment-request")}>
                <PaymentIcon />
                <span>Payment Requests</span>
              </Link>
            </li>
            <li className={isActive('/view-task')}>
              <Link href="/view-task" onClick={() => handleLinkClick("/view-task")}>
                <TaskIcon />
                <span>View Task</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="">
          <ul className="navList">
            <li className="!m-0">
              <a onClick={handleLogout} style={{ cursor: 'pointer' }}>
                <LogOut />
                <span className="text-[#283C63] text-[600]">Log Out</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
