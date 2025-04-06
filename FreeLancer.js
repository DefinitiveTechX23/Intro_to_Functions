function dayRate(hourlyRate) {

    return hourlyRate * 8;


}
console.log(dayRate);

function daysInBudget(budget, hourlyRate){

const dayRate = hourlyRate * 8;
return Math.floor(budget / dayrate);
}

console.log(daysInBudget);

function priceWithMonthlyDiscount(hourlyRate, numDaysProjectSpan, monthlyDiscountRate){

    const dayRate = hourlyRate * 8;
    const fullMonths = Math.floor(numDaysProjectSpan / 22);
    const totalCost = fullMonths * 22 * dayRate * (1- monthlyDiscountRate);

    
    
    return Math.floor(priceWithMonthlyDiscount);
    
    }
    console.log(priceWithMonthlyDiscount);