import { e } from './dom.js';

function topics() {

    const form = document.querySelector('.answer form');
    const btnPost = document.querySelector('.answer button');
    const divContent = document.querySelector('.topic-content');
    const textPost = document.querySelector('#comment');
    const persnName = document.querySelector('#username');
   
    
    btnPost.addEventListener('click', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const text = formData.get('postText');
        const namePerson = formData.get('username');

        const divComment = document.createElement('div');
        divComment.className = 'comment';

        divComment.appendChild(
        e('header', {className:'header'},
        e('p',{},
        e('span',{},`${namePerson}`),' posted on ',
        e('time',{},'2021-10-03 12:08:28'))))
        divComment.appendChild(
        e('div',{className:'comment-main'},e('div',{className:'userdetails'},
        e('img',{src:'./static/profile.png', alt:'avatar'})),
        e('div',{className:'post-content'},e('p',{},`${text}`))))
        divComment.appendChild(
        e('div',{className:'footer'},e('p',{},e('span',{},'10'),' likes'))
        )

        divContent.appendChild(divComment);
       
        textPost.value = '';
        persnName.value = '';
        //const lastDiv = answerDiv.parentNode.lastChild;
        //answerDiv.parentNode.replaceChild(lastDiv,answerDiv);
    });

}
topics();