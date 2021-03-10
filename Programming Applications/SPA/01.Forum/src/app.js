import {e} from './dom.js';

function start() {
    const topic = document.querySelector('#topicName');
    const user = document.querySelector('#username');
    const text = document.querySelector('#postText');
    const btnPost = document.querySelector('.public');
    const btnCancel = document.querySelector('.cancel');
    const form = document.querySelector('form');


    btnPost.addEventListener('click', (ev) => {
        ev.preventDefault();

        const formData = new FormData(form)
        const topicName = formData.get('topicName');
        const userName = formData.get('username');
        const postText = formData.get('postText');

        const post = {
            topicName,
            userName,
            postText
        }


        async function postTopic() {

            
            if (topic.value != '' && user.value != '' && text.value != '') {
                const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
                    method: 'post',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify(post)
                });


                if (response.ok) {
                    const data = await response.json();
                    render(data);
                    console.log(data);
                } else {
                    const error = await response.json();
                    alert(error.message)
                }
            }
        }

        postTopic();

        topic.value = '';
        user.value = '';
        text.value = '';

    });

    btnCancel.addEventListener('click', (ev) => {
        ev.preventDefault();
        topic.value = '';
        user.value = '';
        text.value = '';
    });


    function render(data) {
        const divTitle = document.querySelector('.topic-title');
        const container = document.createElement('div');
        container.className = 'topic-container';

        container.appendChild(e('div', {className:'topic-name-wrapper'},
        e('div', {className: 'topic-name'},
        e('a', {className: 'normal', href: 'http://127.0.0.1:5500/topic-content.html'},e('h2',{},data.topicName)),
        e('div', {className:'columns'},e('div',{},e('p',{},`Date: `,e('time',{},'2020-10-10T12:08:28.451Z')),
        e('div',{className:'nick-name'},e('p',{}, `Username: `,e('span',{},`${data.userName}`)))),
        e('div',{className:'subscribers'},e('p',{},'Subscribers: ',e('span',{},'456')))
        )
        )
        ));

        divTitle.appendChild(container);
        //, onClick: (e) => onDelete()
    }
    
    
    //document.querySelector('.answer')
    //  document.querySelector('.topic-title').addEventListener('click', (ev) => {
    //      if(ev.target.tagName == 'H2'){
    //          console.log(ev.target.parentNode);
             
    //         function topicsList(){

    //         }
    //      }
    // });

}
start()