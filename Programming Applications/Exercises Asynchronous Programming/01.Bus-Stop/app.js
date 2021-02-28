async function getInfo() {
    const busId = document.getElementById('stopId');
    const id = busId.value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${id}`;
    const divStopName = document.getElementById('stopName');
    const ul = document.getElementById('buses');
    ul.innerHTML = '';

    try {
        const respons = await fetch(url);
        const data = await respons.json();

        const buses = data.buses;
        const busStopName = data.name;
        divStopName.textContent = busStopName;

        let arrBuses = Object.entries(buses);
        arrBuses.forEach(line => {
            let liEl = document.createElement('li');
           liEl.textContent = `Bus ${line[0]} arrives in ${line[1]}`;
            ul.appendChild(liEl);
        });

    } catch (error){

    divStopName.textContent = 'Error';
    }





    busId.value = '';

}