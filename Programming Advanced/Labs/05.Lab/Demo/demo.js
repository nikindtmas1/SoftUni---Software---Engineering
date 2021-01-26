let h2 = document.createElement('h2');
    h2.textContent = 'Hello! I\'m Nikolai'; 
    document.body.appendChild(h2);
    //document.body.prepend(h2);
    document.querySelector('h1').appendChild(document.createTextNode('List of Items'));
   

        let text = document.createTextNode('First');
        let textTwo = document.createTextNode('Second');
        let textThree = document.createTextNode('Third');
       
        let liArr = document.querySelectorAll('#items li');
        let liFirst = liArr[0];
        let liSec = liArr[1];

        liFirst.appendChild(text);
        liSec.appendChild(textTwo);

        let liThree = document.createElement('li');
        liThree.appendChild(textThree);
        document.getElementById('items').appendChild(liThree);

        function addItem(){
        
        let inputText = document.getElementById('newItemText').value;
        let li = document.createElement('li');
        //let deletedText = '[Deleted]';
        li.appendChild(document.createTextNode(inputText));
        document.getElementById('items').appendChild(li);
    
        document.getElementById('newItemText').value = '';
    
        }
    
        function removeElement(){
            let inputTextR = document.getElementById('oldItemText').value;
            

            //let docText = document.createTextNode(inputTextR);
            let listLi = document.querySelectorAll('#items li');
    
            
            for (let i = 0; i < listLi.length; i++) {
                
                if(listLi[i].textContent == inputTextR){
                    listLi[i].parentNode.removeChild(listLi[i]);
                }
            }
            document.getElementById('oldItemText').value = '';
        }
   