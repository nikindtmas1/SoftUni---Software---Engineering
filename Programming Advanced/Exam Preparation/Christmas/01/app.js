function solution() {
    const sections = document.getElementsByTagName('section');
    const addButton = sections[0].querySelector('button');
    const sectionListOfGifts = sections[1].querySelector('ul');
    const sectionSentGifts = sections[2].querySelector('ul');
    const sectionDiscardedGifts = sections[3].querySelector('ul');
    
    addButton.addEventListener('click', (ev) => {
        const newGiftName = sections[0].querySelector('input');
       
        const listItem = document.createElement('li');
        const btnSend = document.createElement('button');
        const btnDiscard = document.createElement('button');

        btnDiscard.textContent = 'Discard';
        btnDiscard.id = 'discardButton';
        btnSend.textContent = 'Send';
        btnSend.id = 'sendButton';
        listItem.className = 'gift';
        listItem.textContent = newGiftName.value;
       

        listItem.appendChild(btnSend);
        listItem.appendChild(btnDiscard);
        sectionListOfGifts.appendChild(listItem);

        const arr = Array.from(document.querySelectorAll('.gift'));
        const sorted = arr.sort((a, b)  => a.textContent.localeCompare(b.textContent));
        sorted.forEach((element) => sectionListOfGifts.appendChild(element));
        
        newGiftName.value = '';

        btnSend.addEventListener('click', (ev) => {
            
            const buttons = listItem.querySelectorAll('button');
           buttons[0].remove();
           buttons[1].remove();
         
            sectionSentGifts.appendChild(listItem);
           
        });

        btnDiscard.addEventListener('click', (ev) => {

            const buttons = listItem.querySelectorAll('button');
            buttons[0].remove();
            buttons[1].remove();
          
            sectionDiscardedGifts.appendChild(listItem);
        });
    });
}