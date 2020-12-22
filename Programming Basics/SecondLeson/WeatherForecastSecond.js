function weather([arg1]){
let degrees = Number(arg1);

if(degrees>=26.00 && degrees<=35.00){
    console.log("Hot");
}else if(degrees>=20.1 && degrees<=25.9){
    console.log("Warm");
}else if(degrees>=15.00 && degrees<=20.00){
    console.log("Mild")
}else if(degrees>=12.00 && degrees<=14.9){
    console.log("cool");
}else if(degrees>=5.00 && degrees<=11.9){
    console.log("Cold");
}else if(degrees<=4.99 || degrees>=35.1){
    console.log("unknown");
}
}
weather([16.5]);
weather([8]);
weather([22.4]);
weather([26]);
weather([0]);

//More exercises

function weather(arg1) {
    let degrees = Number(arg1);

    if (degrees >= 26.00 && degrees <= 35.00) {
        console.log("Hot");
    } else if (degrees >= 20.1 && degrees <= 25.9) {
        console.log("Warm");
    } else if (degrees >= 15.00 && degrees <= 20.00) {
        console.log("Mild")
    } else if (degrees >= 12.00 && degrees <= 14.9) {
        console.log("Cool");
    } else if (degrees >= 5.00 && degrees <= 11.9) {
        console.log("Cold");
    }
    else {
        console.log("unknown");
    }
}
    weather(16.5);
    weather(8);
    weather(22.4);
    weather(26);
    weather(0);