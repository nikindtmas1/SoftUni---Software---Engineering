async function students() {

   
   getStudentsInfo();

    const formEl = document.getElementById('registerForm');
    formEl.addEventListener('submit', event => {
        event.preventDefault();

        new FormData(formEl);
    });

    formEl.addEventListener('formdata', event => {

        const firstName = event.formData.get('firstName');
        const lastName = event.formData.get('lastName');
        const facultyNumber = event.formData.get('facultyNum');
        const grade = event.formData.get('grade');

        const studentInfo = {
            firstName,
            lastName,
            facultyNumber,
            grade
        };
        postStudent(studentInfo);
        //document.querySelectorAll('#results').children.innerHTML = '';
        getStudentsInfo();
    });

    
    async function getStudentsInfo(){
        const response = await fetch('http://localhost:3030/jsonstore/collections/students');

        if (response.ok == false) {
            const error = await response.json();
            return alert(error.message);
        }
        const data = await response.json();
    
        const table = document.querySelector('#results');
    
        Object.values(data).forEach(line => {
            
            const tr = document.createElement('tr');
    
            const td1 = document.createElement('td');
            td1.textContent = line.firstName;
            tr.appendChild(td1)
    
    
            const td2 = document.createElement('td');
            td2.textContent = line.lastName;
            tr.appendChild(td2);
    
    
            const td3 = document.createElement('td');
            td3.textContent = line.facultyNumber;
            tr.appendChild(td3);
    
    
            const td4 = document.createElement('td');
            td4.textContent = line.grade;
            tr.appendChild(td4);
            
            table.appendChild(tr);
        });
    }

    async function postStudent(data) {

        const response = await fetch('http://localhost:3030/jsonstore/collections/students', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (response.ok == false) {
            const error = await response.json();
            return alert(error.message);
        }
        const result = await response.json();
        console.log(result);


    }


}

students();