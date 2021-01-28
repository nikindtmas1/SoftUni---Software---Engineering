function addItem() {

    const fillds = Array.from(document.querySelectorAll('input[type=text]'));
    const menu = document.getElementById('menu');

    let inputText = fillds[0].value;
    let inputValue = fillds[1].value;

    let option = document.createElement('option');
    option.textContent = inputText;
    option.value = inputValue;

    menu.appendChild(option);
   
    fillds[0].value = '';
    fillds[1].value = '';
    
}