import confetti from 'canvas-confetti';

let count = 0;
document
  .querySelector<HTMLButtonElement>('#counter-button')!
  .addEventListener('click', () => {
    count += 1;
    document.querySelector<HTMLElement>('#counter')!.innerText = String(count);
    confetti();
  });
