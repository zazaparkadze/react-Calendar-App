import React from 'react';

import BackButton from '../buttons/BackButton';

const Announcements = () => {
    return (
        <>
            <div>
                <ul className='App'>
                    <h2>Announcements</h2>
                    <li>Special Announcement</li>
                    <li>Corona Virus Update</li>
                    <li>Corporative Party</li>
                    <li>CHAT</li>
                    <BackButton />
                </ul>
            </div>
        </>
    );
};

export default Announcements;
