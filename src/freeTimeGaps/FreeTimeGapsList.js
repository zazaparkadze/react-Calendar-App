import React from 'react';

const FreeTimeGapsList = ({ freeTimeGaps }) => {
    return (
        <div>
            <h2 style={{ textAlign: 'center', margin: '0.9rem', opacity: 0.5 }}>
                Free Time Gaps List
            </h2>
            <ol>
                {!freeTimeGaps.length && (
                    <p style={{ color: 'red' }}>
                        No Time Available for Specified Date
                    </p>
                )}
                {freeTimeGaps.map((el) => (
                    <li key={el.id} style={{ color: 'green' }}>
                        {el.startTime} - {el.endTime}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default FreeTimeGapsList;
