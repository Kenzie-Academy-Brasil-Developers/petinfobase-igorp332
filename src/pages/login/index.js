import { login } from "../../scripts/api.js";

const emailInput = document.getElementById('email-login');
const passwordInput = document.getElementById('password-login');
const assignBtn = document.getElementById('assign');
const accessBtn = document.getElementById('access');
const imgBtn = document.createElement('img');
const alert = document.getElementById('alert');

imgBtn.scr = './src/assets/spinner.png';
let token = localStorage.getItem('token');
localStorage.removeItem('token');

accessBtn.addEventListener('click', async(e) =>{
    e.preventDefault()
    accessBtn.innerHTML = '';
    imgBtn.classList.add('img-btn');
    accessBtn.appendChild(imgBtn);

    const submit = {
        email: `${emailInput.value}`,
        password: `${passwordInput.value}`
    }
    const req = await login (submit);
    if(req.message){
        alert.innerHTML = '';
        alert.innerText = `${req.message}`;
        passwordInput.classList.remove('input');
        passwordInput.classList.add('input-alert');
        accessBtn.classList.remove('img-btn');
        accessBtn.innerText = 'Acessar';
    }else{
        localStorage.setItem('token',`${req.token}`);
        window.location.assign('./src/pages/home.html')
    }
})
assignBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.assign('./src/pages/register/register.html')
})
passwordInput.addEventListener('keyup', (input) =>{
    if(input.target.value !== '' && emailInput.value !== ''){
        passwordInput.classList.remove('input-alert')
        passwordInput.classList.add('input')
        accessBtn.classList.add('on-btn');
            accessBtn.disabled = false;
        }else{
            accessBtn.classList.remove('on-btn');
            accessBtn.disabled = true;
        }
})










