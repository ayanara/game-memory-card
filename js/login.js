const input = document.getElementsByClassName('login_input')[0];
const button = document.getElementsByClassName('login_button')[0];
const form = document.querySelector('.login-form');

const validadeInput = ({target}) => {
    if (target.value.length > 2){
        button.removeAttribute ('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}

const handleSubmit = (event) => {
  event.preventDefault();
  localStorage.setItem('player', input.value);

}

input.addEventListener('input', validadeInput);
form.addEventListener('submit', handleSubmit);