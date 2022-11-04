const apiReguest = async (url = '', optionsObj = null, errMsg = null) => {
    try {
        const response = await fetch(url, optionsObj);
        if (!response.ok) throw new Error('Please, reload the app');
    } catch (err) {
        errMsg = err.message;
    } finally {
        return errMsg;
    }
};

export default apiReguest;
