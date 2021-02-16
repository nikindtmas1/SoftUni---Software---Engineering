function solve() {

   
    let form = document.querySelectorAll('.form-control input');
    let trainings = document.querySelector('.modules');

    let lecture = form[0];
    let date = form[1];
    let module = document.querySelector('select');

    let state = {};

    function createElement(type,text, attributes = []){
        let element = document.createElement(type);
        if(text){
            element.textContent = text;
        }

        attributes
        .map(attr => attr.split('='))
        .forEach((name, value) => { 
            element.setAttribute(name,value);
        });

        return element;
    }

    function add(e){
        e.preventDefault();
        if(lecture.value === '' || date.value === '' || module.value === 'Select module'){
            return;
        }
        //console.log('add');
        let lectureName = lecture.value;
        let dateStr = date.value;

        let lectureTitle = lectureName + ' - ' + dateStr.split('-').join('/').split('T').join(' - ');
        let btnDel = createElement('button','Del', ['class=red']);
        let lectureh4 = createElement('h4','lectureTitle');
        let li = createElement('li', undefined, ['class=flex']);

        li.appendChild(lectureh4);
        li.appendChild(btnDel);

        let currModule;
        let ul;
        let lis;

        if(!module.value){
            let h3 = createElement('h3', `${module.value.toUpperCase()}-MODULE`);
            ul = createElement('ul');
            lis = [];
            currModule = createElement('div');

            currModule.appendChild(h3);
            currModule.appendChild(ul);

            state[module.value] = {currModule,ul,lis:[]}
        }else{
            currModule = state[module.value].currModule;
            ul = state[module.value].ul;
            lis = state[module.value].lis;
        }

        lis.push({li,date: date.value});
        lis.sort((a,b) => a.date.localeCompare(b.date)).forEach(({li}) => {

            ul.appendChild(li)
        })

        trainings.appendChild(currModule)
    }
    
    
    document.querySelector('button').addEventListener('click', add) 
        
};
        //let [lecture, date, module] = form;
      

        // if(lecture.value === '' || date.value === '' || module.value === 'Select module'){
        //     return;
        // }

        // console.log(lecture.value);
        // console.log(date.value);
        // console.log(module.value);
        
        /* 
        let divEl = document.createElement('div');
        let h3 = document.createElement('h3');
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let h4 = document.createElement('h4');
        let btn = document.createElement('button');

        divEl.className = 'module';
        h3.textContent = `${lecture.value.toUpperCase()}-${divEl.className.toUpperCase()}`;
       
        li.className = 'flex';
        h4.textContent = `${module.value} - ${date.value}`;
        btn.className = 'red';
        btn.textContent = 'Del';
        

        li.appendChild(h4);
        li.appendChild(btn);
        ul.appendChild(li);
        divEl.appendChild(h3);
        divEl.appendChild(ul);

        trainings.appendChild(divEl);
    
        */
        

        
   

