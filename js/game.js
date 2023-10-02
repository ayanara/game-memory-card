const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const characters = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    
    
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const cheeCkEndGame = () => {
    const disabledCard = document.querySelectorAll('.disabled-card');

    if(disabledCard.length === 12){
        clearInterval(this.loop);
        Swal.fire({
            title: `Parabéns, ${spanPlayer.innerHTML}!`,
            text: `Você ganhou o jogo em ${(timer.innerHTML / 60).toFixed(2)} minutos e ${timer.innerHTML % 60} segundos!`,
            icon: 'success',
            confirmButtonColor: '#ee665c',
        });
    }
}

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter === secondCharacter) {

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        cheeCkEndGame();

    } else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';

        }, 500);
        
    }
}


const revealCard = ({target}) => {
    if (target.parentNode.className.includes('reveal-card')){
        return;
    }

    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();

    }
    
}
const createCard = (character) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character);
    

    return card;
}

const loadGame = () => {

    const duplicaCharacters = [...characters, ...characters];

    const shuffleArray = duplicaCharacters.sort(()=> Math.random() - 0.5);


    shuffleArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);

    });
}

const starTimer = () => {
    this.loop = setInterval(() => {
        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;

    }, 1000);
}

window.onload = () => {

    spanPlayer.innerHTML = localStorage.getItem('player');

    starTimer();
    loadGame();
}
