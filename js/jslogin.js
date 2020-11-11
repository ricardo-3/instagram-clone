//Ingresar 
const singin = document.querySelector('#loginForm');

singin.addEventListener('submit', e => {
    e.preventDefault();

    const email = document.querySelector('#loginEmail').value; 
    const password = document.querySelector('#loginPassword').value;
    
    console.log(email, password)


    auth.
        signInWithEmailAndPassword(email, password,)
        .then(userCredential => {
            console.log('sing in')
        })


})


