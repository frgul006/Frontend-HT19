const name = prompt('Ange ditt namn: ');

function helloPhrase(name) {
  return 'Hej ' + name + '. Varmt välkommen!';
}

// console.log(helloPhrase(name));

const containerEl = document.getElementById('container');
const textToAppend = helloPhrase(name);
const textEl = document.createElement('p');
textEl.textContent = textToAppend;
containerEl.appendChild(textEl);
// containerEl.textContent = textToAppend;
