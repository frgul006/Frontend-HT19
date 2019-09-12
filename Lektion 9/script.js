const headerEl = document.getElementById('header');
headerEl.innerText = headerEl.innerText.toUpperCase();
headerEl.style.color = 'red';
headerEl.style.display = 'none';

document.body.style.backgroundColor = 'yellow';
console.log(document.body);

const paragraphEls = document.getElementsByTagName('p');

console.log(paragraphEls);

for (const paragraphEl of paragraphEls) {
  paragraphEl.className = 'important';
  console.log(paragraphEl);
}

paragraphEls[0].className = paragraphEls[0].className + ' ' + 'first';

const importEl = document.querySelector('.important');
console.log(importEl);
