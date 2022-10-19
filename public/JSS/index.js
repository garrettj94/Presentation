async function signupRedirect (event) {
    event.preventDefault();
    document.location.replace('/')
    console.log('Hi')
}

document.querySelector('#signupBtn').addEventListener('click', signupRedirect)

const loginRedirect = async (event) => {
    event.preventDefault();
    document.location.replace('/homepage')
}

document.querySelector('#loginBtn').addEventListener('click', loginRedirect);