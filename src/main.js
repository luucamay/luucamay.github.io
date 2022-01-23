const greetings = ['hola', 'hi', 'kamisaki'];
const greet = document.querySelector('#greet');
let i = 0;
setInterval(() => {
  greet.textContent = greetings[i % 3];
  i++;
}, 1500);
