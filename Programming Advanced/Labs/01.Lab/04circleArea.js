function circleArea(radius){

    let inpuType = typeof(radius);
    
    if(inpuType === 'number'){

        let area = Math.PI * radius * radius;

        console.log(area.toFixed(2));

    }else{
        
        console.log(`We can not calculate the circle area, because we receive a ${inpuType}.`);
    }

}

circleArea(5);