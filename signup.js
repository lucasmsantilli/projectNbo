const signupForm = document.querySelector('#signupForm') // tomamos el formulario de registro
signupForm.addEventListener('submit', (e)=>{ //agregame el evento submit y funcion callBack
    e.preventDefault() //recibimos el evento
    const name = document.querySelector('#name').value // traemos los campos de los formularios de registro
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const Users = JSON.parse(localStorage.getItem('users'))|| [] // aca usamos un  localStorage para simular una base de datos
    const IsUserRegistered = Users.find(user => user.email === email) //Buscamos con find un usuario que tanga el mismo mail
    if(IsUserRegistered){
        return alert('El usuario ya esta registrado!')
    }

    Users.push({name: name, email: email, password: password}) //aca vamos a guardar a un usuario nuevo en objeto
    localStorage.setItem('users', JSON.stringify(Users)) // Guardamos en el Storage el usuario
    alert('Registro Exitoso!')
    window.location.href = 'login.html' //Re direccion a login
})