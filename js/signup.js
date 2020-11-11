//registrar

const singForm = document.querySelector('#signupForm');

singForm.addEventListener('submit', (e) =>{
    e.preventDefault();


    
   
    const email = document.querySelector('#signupEmail').value; 
    const password = document.querySelector('#signupPassword').value;


    auth.
        createUserWithEmailAndPassword(email, password,)
        .then(userCredential => {
            console.log('sing up correo  creado')
            
        })

})

