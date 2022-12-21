import { API_URI_myServer } from '../config/API_URI_DB';
import apiReguest from '../config/apiRequest';

const handleLogout = async (setLogin) => {
    const url = `${API_URI_myServer}logout`;

    const logoutOptions = {
        method: 'GET',
    };
    await apiReguest(url, logoutOptions);
    localStorage.setItem('accessToken', '');
    setLogin(false);
    console.log('logged out!!!!!');
};

export default handleLogout;
