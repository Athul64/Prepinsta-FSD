function metersToFeet(meters) {
    const feet = meters * 3.281;
    console.log(`${meters} meters is equal to ${feet} feet.`);
}

function feetToMeters(feet) {
    const meters = feet * 0.3048;
    console.log(`${feet} feet is equal to ${meters} meters.`);
}

metersToFeet(15);
metersToFeet(25);
metersToFeet(50);

feetToMeters(40);
feetToMeters(15);
feetToMeters(20);
