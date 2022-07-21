const pwd_input = document.querySelector('#pwd');
const pwd_confirm_input = document.querySelector('#pwd-confirm');
const pwd_input_parent = document.querySelector('.pwd-item');

pwd_input.addEventListener('input', stylePasswordFields);
pwd_confirm_input.addEventListener('input', stylePasswordFields);

function stylePasswordFields() {
    if(arePasswordsSame()) {
        pwd_input.classList.remove("no-pwd-match");
        pwd_confirm_input.classList.remove("no-pwd-match");
        pwd_input_parent.classList.remove("item-no-match");
    } else {
        pwd_input.classList.add("no-pwd-match");
        pwd_confirm_input.classList.add("no-pwd-match");
        pwd_input_parent.classList.add("item-no-match");
    }
}

function arePasswordsSame() {
    return pwd_input.value === pwd_confirm_input.value;
}