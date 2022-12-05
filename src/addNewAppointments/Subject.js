import React from 'react';
import DataContext from '../Context/DataContext';
import { useContext } from 'react';
const Subject = () => {
    const { subject, setSubject } = useContext(DataContext);
    return (
        <>
            <label>Subject</label>
            <textarea
                name='subject'
                id='subject'
                value={subject}
                required={true}
                onChange={(e) => setSubject(e.target.value)}
            ></textarea>
        </>
    );
};

export default Subject;
