function solve() {
  let input = document.getElementById('text').value.toLowerCase();
  let command = document.getElementById('naming-convention').value;

  let result = document.getElementById('result');

  switch (command) {

    case 'Pascal Case': result.textContent = upperCase(input);
      break;

    case 'Camel Case': result.textContent = camelCase(input);
      break;

    default: result.textContent = 'Error!';
      break;
  }

  function upperCase(string) {

    let str = string.slice();

    let output = '';

    let index = 0;
    output += str[index].toUpperCase();
    index++;

    while (index < str.length) {

      if (str[index] !== ' ') {
        output += str[index];
        index++;
      } else if (str[index] === ' ') {
        index++;
        output += str[index].toUpperCase();
        index++;
      }
    }

    return output;
  }

  function camelCase(string) {

    let str = string.slice();

    let index = 0;
    let output = '';

    while (index < str.length) {

      if (str[index] !== ' ') {
        output += str[index];
        index++;
      } else if (str[index] === ' ') {
        index++;
        output += str[index].toUpperCase();
        index++;
      }

    }
    return output;

  }


}