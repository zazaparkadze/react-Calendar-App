import { API_URI_myServer } from '../config/API_URI_DB';
import apiReguest from '../config/apiRequest';
const handleLogout = async (setLogin) => {
    const url = `${API_URI_myServer}logout`;
    const logoutOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const response = await apiReguest(url, logoutOptions);
    localStorage.setItem('accessToken', '');
    console.log(response);
    setLogin(false);
};

export default handleLogout;
