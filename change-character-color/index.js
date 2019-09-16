const id = 'string';
const colors = ['red', 'blue', 'green', 'violet', 'skyblue'];
const str = document.getElementById(id).innerHTML;
document.getElementById(id).innerHTML = '';

function charColorUpdate(str, colors, id) {
  let span;
  for (i = 0; i <= str.length; i++) {
    span = document.createElement('span');
    randomColor = Math.floor(Math.random() * colors.length);
    span.innerHTML = str.charAt(i);
    span.style.color = colors[randomColor];
    span.style.fontSize = '20px';    
    document.getElementById(id).appendChild(span);
  }
}

charColorUpdate(str, colors, id);
setInterval(function () {
  document.getElementById(id).innerHTML = '';
  charColorUpdate(str, colors, id);
}, 60);
