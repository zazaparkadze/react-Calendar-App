import { API_URI_myServer } from '../config/API_URI_DB';

const handleLogIn = async (
    username,
    setUsername,
    password,
    setPassword,
    setLogin,
    setAuth,
    setRegistered
) => {
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
    if (!response?.ok) {
        setUsername('');
        setPassword('');
        //throw new Error('not authorized');
        console.log('....unauthorized');
        setAuth(false);
        setRegistered('');
    } else {
        const res = await response.json();
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('roles', res.roles);
        setLogin(true);
        setRegistered('');
        console.log('logged in');
        console.log(response);
    }
};
export default handleLogIn;
