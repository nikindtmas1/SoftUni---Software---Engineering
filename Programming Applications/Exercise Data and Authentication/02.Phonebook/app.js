function attachEvents() {

    document.getElementById('btnCreate').addEventListener('click', async () => {

        const person = document.getElementById('person').value;
        const phone = document.getElementById('phone').value;

        await createPerson({person,phone});

        document.getElementById('person').value = '';
        document.getElementById('phone').value = '';
        const ulEl = document.getElementById('phonebook');
        const liEl = document.createElement('li');
         liEl.textContent = `${person}: ${phone}`
        ulEl.appendChild(liEl)

      
    })
    document.getElementById('btnLoad').addEventListener('click', async() => {

        getPhoneBook()
    })
}

attachEvents();

async function getPhoneBook(){

    const response = await fetch('http://localhost:3030/jsonstore/phonebook');
    console.log(response);
    const data = await response.json();
    const ulEl = document.getElementById('phonebook')
     Object.values(data).forEach(line => {
         const liEl = document.createElement('li');
         liEl.textContent = `${line.person}: ${line.phone}`
        ulEl.appendChild(liEl)
     });
    
    
}

async function createPerson(input) {
    const response = await fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'post',
        headers: { 'Content-Type': 'application/js' },
        body: JSON.stringify(input)
    });
    const data = await response.json();

}