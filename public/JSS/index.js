// logout button
function logoutRedirect (event) {
    event.preventDefault();
    document.location.replace('/')
}

document.querySelector('#logout').addEventListener('click', logoutRedirect)

// signup button
function signupRedirect (event) {
    event.preventDefault();
    document.location.replace('/')
    console.log('Hi')
}

document.querySelector('#signupBtn').addEventListener('click', signupRedirect)

// login button
const loginRedirect = (event) => {
    event.preventDefault();
    console.log('loginRedirect')
    document.location.replace('/homepage')
}

document.querySelector('#loginBtn').addEventListener('click', loginRedirect);

// create new department button
const homepageRedirect = (event) => {
    event.preventDefault();
    console.log('Hi')
    document.location.replace('/new')
}

document.querySelector('#newdepartmentBtn').addEventListener('click', homepageRedirect);