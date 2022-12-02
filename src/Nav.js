import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='nav'>
            <h2> Time Management App</h2>
            <ul>
                <Link className='Link' to='listAppointments'>
                    <li>List Empoyees Future Apointments</li>
                </Link>
                <Link className='Link' to='freeTimeGaps'>
                    <li>Show Free Time Gaps of specific Employees </li>
                </Link>
                <Link className='Link' to='addNewAppointment'>
                    <li>ADD New Appointment To Schedule </li>
                </Link>
                <Link className='Link' to='vacations'>
                    <li>Add Employees New Vacations</li>
                </Link>
                <Link className='Link' to='announcements'>
                    <li>Announcements</li>
                </Link>
                <Link className='Link' to='admin'>
                    <li>Admin</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Nav;
