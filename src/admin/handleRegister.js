import apiRequest from '../config/apiRequest';
import { API_URI_myServer } from '../config/API_URI_DB';
const handleRegister = async (
    username,
    password,
    registered,
    setRegistered
) => {
    const regInfo = {
        username: username,
        password: password,
    };
    const registerOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(regInfo),
    };
    try {
        const result = await apiRequest(
            `${API_URI_myServer}register`,
            registerOptions
        );
        result === null && setRegistered('Registered');
    } catch (err) {
        console.log(err);
    }
};
export default handleRegister;
