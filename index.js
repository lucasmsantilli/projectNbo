const user = JSON.parse(localStorage.getItem('login_success')) || false //esto te logeas y te lleva al home de la pagina una vez
if(!user){                                                             //logeado
    window.location.href = 'login.html' 
}

const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    alert('Hasta pronto!')
    localStorage.removeItem('login_success')
    window.location.href = 'login.html'
})