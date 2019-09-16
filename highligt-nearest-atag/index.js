const links = Array.from(document.querySelectorAll('a'));
const position = links.map(link => {
  const pos = link.getBoundingClientRect();
  return [pos.x, pos.y];
});

document.addEventListener('mousemove', ev => {
  const distances = [];
  position.forEach(linkpos => {
    const distance = Math.hypot(
      linkpos[0] - parseInt(ev.clientX),
      linkpos[1] - parseInt(ev.clientY)
    );
    distances.push(parseInt(distance));
  });
  const closestIndex = distances.indexOf(Math.min(...distances));
  links.map(link => {
      link.style.backgroundColor = 'white';
  })
  links[closestIndex].style.backgroundColor = 'red';
  document.getElementById('result').innerHTML = (links[closestIndex].href);
});
