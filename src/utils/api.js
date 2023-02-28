const BASE_URL = 'https://airbean.awesomo.dev/api';

async function getRequest(url) {
    const response = await fetch(url, {
        headers: {
            accept: 'application/json'
        }
    });

    const data = await response.json();

    return data;
}

async function postRequest(url, body) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
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

    if(response.success) {
        return response.menu;
    }

    return false;
}


// POST REQUESTS
/* ------------------------------------------------------------- */
async function logUserIn(user) {
    const loggedResult = await postRequest(`${BASE_URL}/user/login`, {
        username: user.username,
        password: user.password,
    });

    return loggedResult;
}

export {
    getCoffeMenu, logUserIn
}