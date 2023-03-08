const BASE_URL = 'https://airbean.awesomo.dev/api';

async function getRequest(url, token) {
    const headers = {
        accept: 'application/json'
    };

    if (token) headers['Authorization'] = `Bearer ${token}`;

    try {
        const response = await fetch(url, { headers });
        const data = await response.json();

        return data;
    } catch (e) {
        console.error(e);
    }
}

async function postRequest(url, body, token) {
    const headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json',
    }

    if (token) headers['Authorization'] = `Bearer ${token}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        });

        const data = await response.json();

        return data;
    } catch(e) {
        console.error(e);
    }
}

async function validateToken() {
    const token = sessionStorage.getItem('USER_TOKEN');

    if (!token) {
        return null;
    } else {
        const response = await fetch(`${BASE_URL}/user/status`, {
            headers: {
                'accept': 'application/json', 
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await response.json();

        if (data.success) {
            return token;
        } else {
            sessionStorage.removeItem('USER_TOKEN');
            sessionStorage.removeItem('USER_NAME');

            return null;
        }
    }
}

/* ------------------------------------------------------------- */

// GET REQUESTS
/* ------------------------------------------------------------- */
async function getCoffeeMenu() {
    const response = await getRequest(`${BASE_URL}/beans`);

    return response.menu;
}

async function getOrder(orderNr) {
    if (!orderNr) return {};

    const token = await validateToken();

    const response = await getRequest(`${BASE_URL}/beans/order/status/${orderNr}`, token);

    return response;
}

async function getUserHistory() {
    const token = await validateToken();

    const response = await getRequest(`${BASE_URL}/user/history`, token);

    return response;
}

async function isLoggedIn() {
    return await validateToken();
}

// POST REQUESTS
/* ------------------------------------------------------------- */

// Gör en order som antingen gäst eller inloggad användare och returnerar orderNr
async function makeNewOrder(order) { // item = {name: 'string', price: number}
    const token = await validateToken();

    const makeOrderResult = await postRequest(`${BASE_URL}/beans/order`, {
        "details": {
            "order": order
        }
    }, token);

    return makeOrderResult.orderNr;
}

async function createNewUser(user) { // user = {username: 'string', password: 'string'}
    const newUserResult = await postRequest(`${BASE_URL}/user/signup`, {
        username: user.username,
        password: user.password,
    });

    return newUserResult;
}

async function logUserIn(user) { // user = {username: 'string', password: 'string'}
    const loginResult = await postRequest(`${BASE_URL}/user/login`, {
        username: user.username,
        password: user.password,
    });

    return loginResult;
}

export {
    getCoffeeMenu,
    getOrder,
    getUserHistory,
    isLoggedIn,
    makeNewOrder,
    createNewUser,
    logUserIn
}