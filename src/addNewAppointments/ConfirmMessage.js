import React from 'react';
import DataContext from '../Context/DataContext';
import { useContext } from 'react';

const ConfirmMessage = () => {
    const { newAppointment } = useContext(DataContext);
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
