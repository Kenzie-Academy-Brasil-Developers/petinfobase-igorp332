const body = document.getElementById('register-body');

export function toltip() {
    const tip = document.createElement('div');
    const success = document.createElement('div');
    const check = document.createElement('img');
    const img = document.createElement('img');
    const warn = document.createElement('h4');
    const advice = document.createElement('p');
    const anchor = document.createElement('a')

    tip.classList('tip');
    success.classList.add('success');
    anchor.classList.add('anchor');

    check.src = './src/assets/check.png';
    check.id = 'check';
    img.src = './src/assets/Rectangle 8.png';
    img.id = 'green';
    warn.innerText = 'Sua conta foi criada com Sucesso!';
    advice.innerText = 'Agora você pode acessar os contúdos utilizando seu usuário e senha na pagina de login:';
    anchor.innerText = 'Acessar a página de login';

    anchor.addEventListener('click', () =>{
        window.location.assign('./index.html')
    })

    img.appendChild(check);
    success.appendChild(img,warn);
    advice.appendChild(anchor);
    tip.append(success, advice)
    body.appendChild(tip)
}

