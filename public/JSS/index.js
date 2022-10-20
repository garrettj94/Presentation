function signupRedirect (event) {
    event.preventDefault();
    document.location.replace('/')
    console.log('Hi')
}

document.querySelector('#signupBtn').addEventListener('click', signupRedirect)

const loginRedirect = (event) => {
    event.preventDefault();
    console.log('loginRedirect')
    document.location.replace('/homepage')
}

document.querySelector('#loginBtn').addEventListener('click', loginRedirect);