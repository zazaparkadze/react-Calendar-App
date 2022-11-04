import React from 'react';

const Subject = ({ subject, setSubject }) => {
    return (
        <>
            <label>Subject</label>
            <textarea
                name='subject'
                id='subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
            ></textarea>
        </>
    );
};

export default Subject;
