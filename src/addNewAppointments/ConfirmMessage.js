import React from 'react';

const ConfirmMessage = ({ newAppointment }) => {
    return (
        <>
            {newAppointment.startTime ? (
                <div>
                    <p style={{ textAlign: 'center', margin: '1rem' }}>
                        The following will be added to the overall company
                        schedule:
                        <br />
                        Start: {newAppointment.startTime} <br />
                        End: {newAppointment.endTime} <br />
                        Subject: {newAppointment.subject}
                    </p>
                </div>
            ) : null}
        </>
    );
};

export default ConfirmMessage;
