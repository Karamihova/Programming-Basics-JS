function solve(input){
    let airline = input.shift();
    let adultCount = Number(input.shift());
    let kidsCount = Number(input.shift());
    let adultTicketPrice = Number(input.shift());
    let servicePrice = Number(input.shift());

    let kidsTicketPrice = adultTicketPrice - (adultTicketPrice * 70 / 100);
    adultTicketPrice += servicePrice;
    kidsTicketPrice += servicePrice;

    let totalSum = (kidsTicketPrice * kidsCount) + (adultTicketPrice * adultCount);
    let agencyProfit = totalSum * 20 / 100;

    console.log(`The profit of your agency from ${airline} tickets is ${agencyProfit.toFixed(2)} lv.`);
}

solve(["Ryanair",
"60",
"23",
"158.96",
"39.12"])