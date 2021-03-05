async function request(url, optios){
    const response = await fetch(url, optios);
    if(response.ok == false){
        const error = await response.json();
        throw new Error(error.message)
    }
    const data = await response.json();
    return data;
}


//const tebody = document.getElementsByTagName('tbody')[0];

async function getAllBooks() {
    const books = await request('http://localhost:3030/jsonstore/collections/books');

    const rows = Object.entries(books).map(createRow).join('')
    document.querySelector('tbody').innerHTML = rows;
    
}

function createRow([id, book]){

    const result = `<tr data-id=${id}>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>
    <button class="editButton">Edit</button>
    <button class="deleteButton">Delete</button>
    </td>
    </tr>`

    return result;
}

async function getBookById(id) {
    const response = await fetch('http://localhost:3030/jsonstore/collections/books/' + id);
    const data = await response.json();

    console.log(data);
}

async function createBook(event) {

    event.preventDefault();
    const formData = new FormData(event.target);
    const book = {
        title:formData.get('title'),
        author: formData.get('author')
    }
    await request('http://localhost:3030/jsonstore/collections/books', {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(book)
    });
    
    event.target.reset();
    getAllBooks();
}

async function updateBook(event) {

    event.preventDefault();
    const formData = new FormData(event.target);
    const id = formData.get('id');
    const book = {
        title:formData.get('title'),
        author: formData.get('author')
    }

    await request('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'put',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(book)
    });
   
    document.getElementById('createForm').style.display = 'block';
    document.getElementById('editForm').style.display = 'none';

    event.target.reset();
    getAllBooks();
}

async function deleteBook(id) {
    await request('http://localhost:3030/jsonstore/collections/books/' + id, {
    method: 'delete'
    });

    getAllBooks();
}

function start(){

    document.getElementById('loadBooks').addEventListener('click', getAllBooks);
    document.getElementById('createForm').addEventListener('submit', createBook);
    document.getElementById('editForm').addEventListener('submit', updateBook);
    document.querySelector('table').addEventListener('click', hendTableClick);

    getAllBooks();
}
start()

function hendTableClick(event){
if(event.target.className == 'editButton'){
    document.getElementById('createForm').style.display = 'none';
    document.getElementById('editForm').style.display = 'block';

    const bookId = event.target.parentNode.parentNode.dataset.id;
    loadBookForEdit(bookId)
}else if(event.target.className == 'deleteButton'){
    const confirmed = confirm('Are you sure?');

    if(confirmed){

        const bookId = event.target.parentNode.parentNode.dataset.id;
        deleteBook(bookId);
    }
}

}

async function loadBookForEdit(id){
    const book = await request('http://localhost:3030/jsonstore/collections/books/' + id);

    document.querySelector('#editForm [name=id]').value = id;
    document.querySelector('#editForm [name=title]').value = book.title;
    document.querySelector('#editForm [name=author]').value = book.author;
}