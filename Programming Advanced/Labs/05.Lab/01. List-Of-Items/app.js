function addItem() {
    let text = document.getElementById('newItemText').value;

    let liElement = document.createElement('li');

    liElement.appendChild(document.createTextNode(text));


    document.getElementById('items').appendChild(liElement);

    document.getElementById('newItemText').value = '';
}