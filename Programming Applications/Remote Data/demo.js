const data = {title:'First Post',content:'Hello, Server!'};

fetch('/articles', {

method: 'post',

headers: { 'Content-type': 'application/json' },

body: JSON.stringify(data),

});

const data = {title:'My Post',content:'Hello Niki!'};

fetch('http://localhost:3030/jsonstore/advanced/articles/details/articles', {
    method: 'post',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(data)
});