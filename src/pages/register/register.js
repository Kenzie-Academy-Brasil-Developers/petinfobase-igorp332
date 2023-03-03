import { register } from "../../scripts/api.js";
import {toltip } from "../../scripts/toltip.js"

const backToLoginBtn = document.getElementById('go-back-to-login');
const user = document.getElementById('user-register');
const email = document.getElementById('email-register');
const avatar = document.getElementById('avatar-register');
const password = document.getElementById('password-register');
const registerBtn = document.getElementById('register');
const alert = document.getElementById('alert');
const imgBtn = document.createElement('img');
imgBtn.src = '../../assets/spinner.png';

backToLoginBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    window.location.assign('../../../index.html');
})

registerBtn.addEventListener('click', async (e) =>{
    e.preventDefault();
    registerBtn.innerHTML = '';
    imgBtn.classList.add('img-btn');
    registerBtn.appendChild(imgBtn);

    const submit = {
        username: `${user.value}`,
        email: `${email.value}`,
        password: `${password.value}`,
        avatar: `${avatar.value}`
      }

      const req = await register(submit);

      if(req.message){
        alert.innerHTML = '';
        alert.innerText = `${req.message}`;
        registerBtn.classList.remove("img-btn");
        registerBtn.innerText = 'Cadastrar';
      } else {
        registerBtn.classList.remove('img-btn');
        registerBtn.innerText = 'Cadastrar';
        toltip()
      }
})

password.addEventListener('keyup', (input) => {
    if(input.target.value !== '' && avatar.value !== '' && email.value !== '' && user.value !== '' ){
        registerBtn.disabled = false;
        registerBtn.classList.add('on-btn')
    }
    else{
        registerBtn.classList.remove('on-btn')
        registerBtn.disabled = true;
    }
})