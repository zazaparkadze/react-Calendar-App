import React from 'react';

const FreeTimeGapsList = ({ freeTimeGaps }) => {
    return (
        <div>
            <h2 style={{ textAlign: 'center', margin: '0.9rem', opacity: 0.5 }}>
                Free Time Gaps List
            </h2>
            <ol>
                {freeTimeGaps.map((el) => (
                    //    console.log(el.id),
                    <li key={el.id} style={{ color: 'green' }}>
                        {el.startTime} {el.endTime}
                    </li>
                ))}
                <p>---- &copy; here must be a diagram</p>
            </ol>
        </div>
    );
};

export default FreeTimeGapsList;
