function dailyMoney([arg1,arg2,arg3]){
    let workDay = Number(arg1);
    let dayDolar = Number(arg2);
    let usdToLeva = Number(arg3);

    let monthRevenu = workDay * dayDolar;
    let yearRevenu = ((monthRevenu * 12) + (monthRevenu*2.5));
    let revenuAfterTax = (yearRevenu - (yearRevenu*0.25));
    let yearRevenuInLeva = revenuAfterTax * usdToLeva;

    let dayInLeva = (yearRevenuInLeva/365).toFixed(2);

    console.log(dayInLeva);

}
dailyMoney(["21", "75.00", "1.59"]);
dailyMoney(["15", "105", "1.71"]);
dailyMoney(["22", "199.99", "1.50"]);