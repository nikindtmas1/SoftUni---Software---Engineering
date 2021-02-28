function solve() {
    const inputDepart = document.getElementById('depart');
    const inputArrive = document.getElementById('arrive');
    const info = document.querySelector('.info');
    let stop = 'depot';
    let nextStop;
    let stopName;

   async function depart() {
      
       const url = `http://localhost:3030/jsonstore/bus/schedule/${stop}`;

       const respons = await fetch(url);
       const data = await respons.json();

       nextStop = data.next;
       stopName = data.name;
       info.textContent = `Next stop ${stopName}`;
       stop = nextStop;
       inputDepart.disabled = true;
       inputArrive.disabled = false;
     
    }

    function arrive() {
       
           info.textContent = `Arriving at ${stopName}`;
           inputArrive.disabled = true;
           inputDepart.disabled = false;
       
    }

    return {
        depart,
        arrive
    };
}

let result = solve();