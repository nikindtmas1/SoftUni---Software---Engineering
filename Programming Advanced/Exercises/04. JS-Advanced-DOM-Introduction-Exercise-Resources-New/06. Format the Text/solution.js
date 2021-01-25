function solve() {
  const btn = document.getElementById('formatItBtn');
  let input = document.getElementById('input');
  let output = document.getElementById('output');
  let inputText = input.value;
  btn.click();
  let inputArr = inputText.split('.').filter((x) => x != '');
  let result = [];
  let final = [];

  if (inputArr.length <= 3 && inputArr.length !== 0) {
    result.push(`<p>${inputArr}<p/>`);
    output.textContent = result;
  } else if (inputArr.length > 3) {

    let index = 0;
    // let currLetter = inputArr[index];
    // result.push(currLetter);
    // index++;
    while (index < inputArr.length) {
      currLetter = inputArr[index];
      result.push(currLetter);
      if ((index + 1) % 3 === 0) {
        final.push(`<p>${result}</p>`);
        //output.textContent = result;

        result = [];
      }

      index++;

    }

    if (result.length > 0) {
      final.push(`<p>${result}</p>`);

    }

    let print = final.join('\n');
    output.textContent = print;

  }

}