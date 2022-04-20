const eye = document.getElementsByClassName('eye-svg')[0]
const password = document.getElementById('password')

eye.onclick = () => password.type == 'password' ? password.type = 'text' : password.type = 'password'