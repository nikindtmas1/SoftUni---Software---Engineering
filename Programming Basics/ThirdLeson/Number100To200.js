function number100To200(number) {
    let num = Number(number);

    if (num < 100) {
        console.log("Less than 100");
    } else if (num <= 200 && num >= 100) {
        console.log("Between 100 and 200");
    } else if (num > 200) {
        console.log("Greater than 200")
    }
}
number100To200("95");
number100To200("120");
number100To200("210");