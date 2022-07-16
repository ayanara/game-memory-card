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
const revealCard = ({target}) => {
    target.parentNode.classList.add('reveal-card');
}
const createCard = (character) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);

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
