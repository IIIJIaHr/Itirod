let keys = [];
let $input = $('input');
let $keysContainer = $('.keys');

for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
  keys.push(String.fromCharCode(i));
}

for (let key of keys) {
  let $newKeyElem = $('<div>').addClass('key').html(key);
  $keysContainer.append($newKeyElem);
}

$keysContainer.click(function (event) {
  if(event.target.className === 'key'){
    $input.val((i, val) => val + event.target.innerHTML);
  }
});