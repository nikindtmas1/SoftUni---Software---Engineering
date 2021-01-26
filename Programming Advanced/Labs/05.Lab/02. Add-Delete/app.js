function addItem() {
    let text = document.getElementById('newText').value;

    let liElement = document.createElement('li');

    liElement.appendChild(document.createTextNode(text));


    document.getElementById('items').appendChild(liElement);

    document.getElementById('newText').value = '';
}

function remove(){

  const lielement = document.getElementById('li-to-delete');

  lielement.parentNode.removeChild(lielement)
}