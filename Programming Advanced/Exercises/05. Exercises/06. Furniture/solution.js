function solve() {
const textarea = document.querySelectorAll('textarea');
const buttons = document.querySelectorAll('button');

buttons[0].addEventListener('click', function (e){
const arr =JSON.parse(textarea[0].value);


for(let el of arr){
const row = document.createElement('tr');
const cellOne = document.createElement('td');
const image = document.createElement('img');
image.setAttribute('src', el.img);
cellOne.appendChild(image);

const cellTwo = document.createElement('td');

const cellThri = document.createElement('td');
const cellFour = document.createElement('td');
const cellFif = document.createElement('td');


}
console.log(arr);
})

buttons[1].addEventListener('click', function (e){
  const furniture = Array.from(body.querySelectorAll('input[type=checkbox]:checked'))
  .map(input => input.parentNode.parentNode);

  const result = {
    bought: [],
    totalPrice: 0,
    decFactorSum: 0
  }

  for(let row of furniture){

    const cells = row.children
    const name = cells[1].children[0].textContent;
    result.bought.push(name)

    const price = Number(cells[2].children[0].textContent);
    result.totalPrice += price;

    const factor = Number(cells[3].children[0].textContent);
    result.decFactorSum += factor;
  }

  textarea[1].value = 
})
  //TODO...
}