function solve(input){
    let budget = Number(input[0]);
    let season = input[1];
    let fishers = Number(input[2]);
    let totalCost = 0;

    if(season == "Spring"){
        totalCost = 3000;
    } else if (season == "Summer" || season == "Autumn"){
        totalCost = 4200;
    } else if (season == "Winter"){
        totalCost = 2600;
    }

    if(fishers <= 6){
        totalCost -= totalCost * 10 / 100;
    } else if (fishers >= 7 && fishers <= 11){
        totalCost -= totalCost * 15 / 100;
    } else if (fishers >= 12){
        totalCost -= totalCost * 25 / 100;
    }

    if(fishers % 2 == 0 && season != "Autumn"){
        totalCost -= totalCost * 5 / 100;
    }

    let isMoneyEnough = budget >= totalCost;
    let difference = Math.abs(budget - totalCost);
    if(isMoneyEnough){
        console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);
    } else{
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`);
    }
}

solve(["3600",
"Autumn",
"6"])