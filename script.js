const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const form = document.getElementById('myform');
const pwError = document.getElementById('pw-error');
const fnError = document.getElementById('fn-error');
const lnError = document.getElementById('ln-error');
const pws = document.getElementsByClassName('pw');

function validateForm() {
    if(matchPass()) {
        console.log('true');
        return true; }
    console.log('false');
    return false;
}

function matchPass() {
    if(password.value === passwordConfirm.value) {
        password.classList.remove('error');
        passwordConfirm.classList.remove('error');
        password.classList.add('onfcs');
        passwordConfirm.classList.add('onfcs')
        return true;
    } else {
        password.classList.remove('onfcs');
        passwordConfirm.classList.remove('onfcs');
        password.classList.add('error');
        passwordConfirm.classList.add('error')
        pwError.style.display= 'contents';
        return false;
    }
}

passwordConfirm.addEventListener('input', () => {
    if(password.value === passwordConfirm.value) {
        password.classList.remove('error');
        passwordConfirm.classList.remove('error');
        password.classList.add('onfcs');
        passwordConfirm.classList.add('onfcs')
        pwError.style.display= 'none';
    }
    else {
        password.classList.remove('onfcs');
        passwordConfirm.classList.remove('onfcs');
        password.classList.add('error');
        passwordConfirm.classList.add('error')
        pwError.style.display= 'contents';
    }
});


const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');

firstName.addEventListener('input', (event) => {
    if(firstName.validity.patternMismatch) {
        firstName.setCustomValidity(" ");
        firstName.classList.remove('onfcs');
        firstName.classList.add('error');
        fnError.style.display = 'contents';
    }
    else {
        firstName.classList.remove('error');
        firstName.classList.add('onfcs');
        fnError.style.display = 'none';
    }
});

lastName.addEventListener('input', (event) => {
    if(lastName.validity.patternMismatch) {
        lastName.setCustomValidity(" ");
        lastName.classList.remove('onfcs');
        lastName.classList.add('error');
        lnError.style.display = 'contents';
    } else {
        lastName.classList.remove('error');
        lastName.classList.add('onfcs');
        lnError.style.display = 'none';
    }
})

  