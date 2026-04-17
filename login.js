const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    alert(`Nome de usuário: ${username}\nSenha: ${password}`);
});

const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

const lockClosedPath = "M6 22h12c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2h-1V7c0-2.76-2.24-5-5-5S7 4.24 7 7v2H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2M9 7c0-1.65 1.35-3 3-3s3 1.35 3 3v2H9zm-3 4h12v9H6z";
const lockOpenPath = "M6 22h12c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2V7c0-2.76-2.24-5-5-5-1.64 0-3.09.69-4.12 1.78l1.41 1.41C10.08 4.47 10.98 4 12 4c1.65 0 3 1.35 3 3v3H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2m8-9v2h-3v2h5v-4h-2z";

togglePassword.addEventListener('click', function () {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;

    const pathElement = togglePassword.querySelector('path');
    const state = togglePassword.getAttribute('data-state');

    if (type === 'text') {
        togglePassword.setAttribute('data-state', 'open');
        pathElement.setAttribute('d', lockOpenPath);
        togglePassword.style.color = 'rgba(255, 255, 255, 0.7)';
    } else {
        togglePassword.setAttribute('data-state', 'closed');
        pathElement.setAttribute('d', lockClosedPath);
        togglePassword.style.color = 'rgba(255, 255, 255, 0.514)';
    }
});