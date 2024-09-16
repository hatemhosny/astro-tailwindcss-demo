import confetti from 'canvas-confetti';
let count = 0;
document
    .querySelector('#counter-button')
    .addEventListener('click', () => {
    count += 1;
    document.querySelector('#counter').innerText = String(count);
    confetti();
});
