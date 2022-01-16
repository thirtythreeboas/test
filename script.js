let button = document.getElementById('button');

const handleClick = param => {
  const mouseOver = () => button.style.color = `${param !== undefined ? '#000' : '#f5f7f8'}`;
  const mouseOut = () => button.style.color = `${param !== undefined ? '#fff' : '#5a5a6f'}`;
  if (param === undefined) button.style.color = '#f5f7f8';
  button.addEventListener('mouseover', mouseOver);
  button.addEventListener('mouseout', mouseOut);
};

const reset = () => {
  button.style.color = '#fff';
  button.style.display = 'flex';
  button.focus();
  handleClick('reset');
}

window.onkeydown = function(e) {
  if (e.keyCode == 32) {
    if (button.style.display !== 'none') {
      button.style.display = 'none';
    } else {
      button.style.display = 'flex';
    }
  }
}
