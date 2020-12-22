function weather([arg1]){
let str = arg1.toLowerCase();

if (str == "suny"){
    console.log("It's worm outside !");
}else{
    console.log("It's cold outside !")
}
}
weather(["snowy"]);

// More exercises

function weatherFor(arg1) {
    let str = arg1;

    if (str == "sunny") {
        console.log("It's warm outside!");
    } else if (str == "cloudy") {
        console.log("It's cold outside!");
    } else if (str == "snowy") {
        console.log("It's cold outside!");
    }
}
weatherFor("snowy");

//
function weatherFor(arg1) {
    let str = arg1;

    if (str == "sunny") {
        console.log("It's warm outside!");
    } else {
        console.log("It's cold outside!");
    }
}
weatherFor("snowy");