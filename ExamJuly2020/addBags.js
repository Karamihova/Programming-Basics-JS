function solve(input){

    let luggagePricePer20Kg = Number(input.shift());
    let luggageKg = Number(input.shift());
    let daaysToFlight = Number(input.shift());
    let luggageCount = Number(input.shift());

    let luggagePrice = 0;
    if(luggageKg < 10){

        luggagePrice = luggagePricePer20Kg * 20 / 100;

    } else if (luggageKg >= 10 && luggageKg <= 20){

        luggagePrice = luggagePricePer20Kg * 50 / 100;

    } else{
        luggagePrice = luggagePricePer20Kg;
    }

    if(daaysToFlight < 7){
        luggagePrice += luggagePrice * 40 / 100;
    } else if (daaysToFlight >= 7 && daaysToFlight <= 30){
        luggagePrice += luggagePrice * 15 / 100;
    } else{
        luggagePrice += luggagePrice * 10 / 100;
    }

    let totalLuggagePrice = luggagePrice * luggageCount;

    console.log(`The total price of bags is: ${totalLuggagePrice.toFixed(2)} lv.`);
}

solve(["63.80",
"23",
"3",
"1"])