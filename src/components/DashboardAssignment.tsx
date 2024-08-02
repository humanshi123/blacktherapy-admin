"use client";
import { useState, CSSProperties } from 'react';
import Link from 'next/link';
import { NextIcon, PervIcon } from '@/utils/svgicon';

const DashboardAssignment = () => {
  const data = [
    { id: 1, apptDate: '26 July 2023', renewalDate: '04 Jan 2025', chatWithClinician: 'Start Chat', videoChat: 'Start Video Call', billingAmount: '$25.00',  },
    { id: 2, apptDate: '26 July 2023', renewalDate: '04 Jan 2022', chatWithClinician: 'Renew Subscription', videoChat: 'Renew Subscription', billingAmount: '$25.00',  },
    { id: 3, apptDate: '26 July 2023', renewalDate: '04 Jan 2025', chatWithClinician: 'Not Available', videoChat: 'Wait for approval', billingAmount: '$25.00', },
    { id: 5, apptDate: '26 July 2023', renewalDate: '04 Jan 2025', chatWithClinician: 'Start Chat', videoChat: 'Start Video Call', billingAmount: '$25.00',  },
    { id: 6, apptDate: '26 July 2023', renewalDate: '04 Jan 2022', chatWithClinician: 'Renew Subscription', videoChat: 'Renew Subscription', billingAmount: '$25.00',  },
    { id: 7, apptDate: '26 July 2023', renewalDate: '04 Jan 2025', chatWithClinician: 'Not Available', videoChat: 'Wait for approval', billingAmount: '$25.00', },
 // Add more data as needed
  ];
//paginationStart
  const [currentPage, setCurrentPage] = useState(0);   
  const itemsPerPage = 4;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const currentData = data.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Number of pages to display before and after the current page
  
    // Adjust start and end pages based on total pages
    const startPage = Math.max(0, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages - 1, startPage + maxPagesToShow - 1);
  
    // Display page numbers in the visible range
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          style={{ background: currentPage === i ? '#26395E' : '', color: currentPage === i ? '#fff' : '' }}
        >
          {i + 1}
        </button>
      );
    }
  
    // Display the last page
    if (endPage < totalPages - 1) {
      if (endPage < totalPages - 2) {
        pageNumbers.push(<span key="ellipsis-end">...</span>);
      }
      pageNumbers.push(
        <button key="end" onClick={() => handlePageChange(totalPages - 1)} disabled={currentPage === totalPages - 1}>
          {totalPages}
        </button>
      );
    } 

    return pageNumbers;
  };
  
  
  //paginationEnd

  function isPastDate(dateString: string) {
        const date = new Date(dateString);
        const today = new Date();
        return date < today;
    }

  const getStyle = (text: string): CSSProperties => {
    let style: CSSProperties = {
      padding: '2px 10px',
      borderRadius: '20px',
      display: 'inline-block',
      fontSize: '10px',
    };

    switch (text) {
      case 'Renew Subscription':
        style.backgroundColor = '#FFFCEC';
        style.color = '#FFA234';
        break;
      case 'Start Chat':
      case 'Start Video Call':
        style.backgroundColor = '#CBFFB2';
        style.color = '#42A803';
        break;
      case 'Wait for approval':
        style.backgroundColor = '#FFFCB2';
        style.color = '#A85C03';
        break;
      case 'Not Available':
        style.backgroundColor = '#FFBBCD';
        style.color = '#bb2b51';
        break;
      default:
        break;
    }

    return style;
  };

 

  return (
    <>
    <h3 className='mb-[20px]'>Assignment details</h3>
    <div className='table-common'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Appt Date</th>
            <th>Renewal Date</th>
            <th>Chat With Clinician</th>
            <th>Video Chat</th>
            <th>Billing Amount</th>
            <th>Care Team</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.apptDate}</td>
              <td>
                {isPastDate(item.renewalDate) ? (
                  <Link href="/renew" style={getStyle('Renew Subscription')}>Renew Subscription</Link>
                ) : (
                  item.renewalDate
                )}
              </td>
              <td>
                {item.chatWithClinician === 'Start Chat' ? (
                  <Link href="/chat" style={getStyle('Start Chat')}>{item.chatWithClinician}</Link>
                ) : isPastDate(item.renewalDate) || item.chatWithClinician === 'Renew Subscription' ? (
                  <Link href="/renew" style={getStyle('Renew Subscription')}>{item.chatWithClinician}</Link>
                ) : (
                  <span style={getStyle(item.chatWithClinician)}>{item.chatWithClinician}</span>
                )}
              </td>
              <td>
                {item.videoChat === 'Start Video Call' ? (
                  <Link href="/video-call" style={getStyle('Start Video Call')}>{item.videoChat}</Link>
                ) : isPastDate(item.renewalDate) || item.videoChat === 'Renew Subscription' ? (
                  <Link href="/renew" style={getStyle('Renew Subscription')}>{item.videoChat}</Link>
                ) : (
                  <span style={getStyle(item.videoChat)}>{item.videoChat}</span>
                )}
              </td>
              <td>{item.billingAmount}</td>
              <td>
                <Link href="/care-team">
                {/* <ViewIcon /> */}fsd
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='pagination-custom-outer'>
      <div className='pagination-custom'>
        <button onClick={handlePrevPage} disabled={currentPage === 0}>
         <PervIcon />
        </button>
        {renderPageNumbers()}
        <button onClick={handleNextPage} disabled={currentPage >= totalPages - 1}>
          <NextIcon />
        </button>
      </div>
    </div>
    </div>
    </>
  );
};

export default DashboardAssignment;
