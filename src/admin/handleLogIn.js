import { API_URI_myServer } from '../config/API_URI_DB';

const handleLogIn = async (username, password, setLogin) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    };
    const response = await fetch(`${API_URI_myServer}auth`, requestOptions);
    if (!response?.ok) throw new Error('not authorized');
    const res = await response.json();
    localStorage.setItem('accessToken', res.accessToken);
    setLogin(true);
};
export default handleLogIn;
