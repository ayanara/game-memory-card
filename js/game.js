const grid = document.querySelector('.grid');

const characters = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter === secondCharacter) {

    } else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');
        }, 500);
        
    }
}

let firstCard = '';
let secondCard = '';

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


loadGame();
