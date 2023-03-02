import { getUserToken } from "./helpers";

const BASE_URL = 'https://airbean.awesomo.dev/api';

async function getRequest(url, token) {
    const headers = {
        accept: 'application/json'
    };

    if (token) headers['Authorization'] = `Bearer ${token}`;

    const response = await fetch(url, {headers});
    const data = await response.json();

    return data;
}

async function postRequest(url, body, token) {
    const headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json',
    }

    if (token) headers['Authorization'] = `Bearer ${token}`;

    const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
    });

    const data = await response.json();

    return data;
}
 
/* ------------------------------------------------------------- */

// GET REQUESTS
/* ------------------------------------------------------------- */
async function getCoffeMenu() {
    const response = await getRequest(`${BASE_URL}/beans`);

    return response.menu;
}

// Token kan utelämnas för att få en gästs order
async function getOrder(orderNr) {   
    let token = getUserToken();

    if(!await isLoggedIn(token)) token = null;

    const response = await getRequest(`${BASE_URL}/beans/order/status/${orderNr}`, token);

    return response;
}

async function getUserHistory() {
    let token = getUserToken();

    if(!await isLoggedIn(token)) token = null;

    const response = await getRequest(`${BASE_URL}/user/history`, token);

    return response;
}

async function isLoggedIn() {
    const token = getUserToken();

    const response = await getRequest(`${BASE_URL}/user/status`, token);

    return response.success;
}

// POST REQUESTS
/* ------------------------------------------------------------- */

// Order ska se ut på följande sätt:
/**
 * [
        {
            "name": item.name,
            "price": item.price
        },
        {
            "name": item.name,
            "price": item.price
        },
        ...
    ]
 */
// Gör en order som antingen gäst eller inloggad användare och returnerar orderNr
async function makeNewOrder(order) { // item = {name: 'string', price: number}
    let token = getUserToken();

    if(!await isLoggedIn(token)) token = null;

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

// Uppdaterar token i sessionStorage och returnerar om inloggningen lyckades eller inte
async function logUserIn(user) { // user = {username: 'string', password: 'string'}
    const loginResult = await postRequest(`${BASE_URL}/user/login`, {
        username: user.username,
        password: user.password,
    });

    if (loginResult.success) {
        sessionStorage.setItem('USER_TOKEN', loginResult.token);

        return loginResult;
    } 

    return loginResult;
}

export {
    getCoffeMenu, 
    getOrder, 
    getUserHistory, 
    isLoggedIn, 
    makeNewOrder, 
    createNewUser, 
    logUserIn
}