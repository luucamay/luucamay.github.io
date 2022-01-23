const greetings = ['hola', 'hi', 'kamisaki'];
const greet = document.querySelector('#greet');
let i = 0;
setInterval(() => {
  greet.textContent = greetings[i % 3];
  i++;
}, 1500);

const showEmoji = () => {
  // TO DO add explosion of particles and change the text to nice to meet you or not mmm...
  const emojiElement = document.querySelector(".emoji");
  emojiElement.style.display = "block";
  setTimeout(() => emojiElement.style.display = "none", 2000);
}

let sayhi = document.querySelector('#sayHi');
console.log(sayhi);
sayhi.addEventListener('click', showEmoji);

