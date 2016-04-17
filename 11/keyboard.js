let keys = [];
let input = document.querySelector('input');
let keysContainer = document.querySelector('.keys');
for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
  keys.push(String.fromCharCode(i));
}

for (let key of keys) {
  let newKeyElem = document.createElement('div');
  newKeyElem.innerHTML = key;
  newKeyElem.classList += 'key';
  keysContainer.appendChild(newKeyElem);
}

keysContainer.onclick = function (event) {
  if(event.target.className === 'key'){
    input.value += event.target.innerHTML;
  }
}