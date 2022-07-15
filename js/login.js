const input = document.getElementsByClassName('login_input')[0];
const button = document.getElementsByClassName('login_button')[0];

const validadeInput = ({target}) => {
    if (target.value.length > 2){
        button.removeAttribute ('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}

input.addEventListener('input', validadeInput);