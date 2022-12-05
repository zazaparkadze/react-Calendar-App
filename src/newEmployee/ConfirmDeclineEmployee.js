import React from 'react';
import NewEmployeeCancelButton from './NewEmployeeCancelButton';
import NewEmployeeOkButton from './NewEmployeeOkButton';

const ConfirmDeclineEmployee = () => {
    return (
        <div>
            <NewEmployeeOkButton />
            <NewEmployeeCancelButton />
        </div>
    );
};

export default ConfirmDeclineEmployee;
