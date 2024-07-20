function calculateCoffeeSupply(age, cupsPerDay, maxAge = 75) {
    let yearsRemaining = maxAge - age;
    let totalCups = Math.round(cupsPerDay * 365 * yearsRemaining);
    console.log(`You will need ${totalCups} cups of coffee to keep you awake until the age of ${maxAge}.`);
}
calculateCoffeeSupply(18, 3); 
calculateCoffeeSupply(25, 2); 
calculateCoffeeSupply(50, 4); 