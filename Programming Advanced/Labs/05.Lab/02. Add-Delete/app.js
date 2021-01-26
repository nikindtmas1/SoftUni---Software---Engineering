function addItem() {


  let liElement = createElement('li', document.getElementById('newText').value);

  const deleteBtn = createElement('a', '[Delete]');
  deleteBtn.href = '#';
  deleteBtn.addEventListener('click', (ev) => {
    ev.target.parentNode.remove(ev)
  });

  liElement.appendChild(deleteBtn);

  document.getElementById('items').appendChild(liElement);

  document.getElementById('newText').value = '';

  
  function createElement(type, content) {
    const element = document.createElement(type);
    element.textContent = content;
    return element;

  }
}
