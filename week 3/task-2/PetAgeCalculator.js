function calculatePetAge(petAge, conversionRate = 7) {
    let petYears = petAge * conversionRate;
    console.log(`Your pet is ${petYears} years old in pet years!`);
}
// different ages and conversion rates
calculatePetAge(3); // Default conversion rate of 7 (e.g., for a cat)
calculatePetAge(3, 10); // conversion rate of 10 (e.g., for a dog)
calculatePetAge(2, 13); // conversion rate of 13 (e.g., for a rabbit)
