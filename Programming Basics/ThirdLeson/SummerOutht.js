function summerOutht(degrees, dayPart) {
    degrees = Number(degrees);
    dayPart = dayPart.toLowerCase();

    let outfit = "";
    let shoes = "";

    if (dayPart == "morning") {
        if (degrees <= 18 && degrees >= 10) {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (degrees <= 24 && degrees > 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees >= 25) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    } else if (dayPart == "afternoon") {
        if (degrees <= 18 && degrees >= 10) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees <= 24 && degrees > 18) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (degrees >= 25) {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
    } else if (dayPart == "evening") {
        if (degrees <= 18 && degrees >= 10) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees <= 24 && degrees > 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees >= 25) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutht("28", "Evening");