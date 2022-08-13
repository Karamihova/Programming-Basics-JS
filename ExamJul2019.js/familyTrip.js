function solve(input){
    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let nightPrice = Number(input[2]);
    let expencesPercetage = Number(input[3]);

    if(nights > 7){
        nightPrice -= nightPrice * 5 / 100;
    }

    let nightsCost = nights * nightPrice;
    let expencesPrice = budget * expencesPercetage / 100;
    let totalSum = nightsCost + expencesPrice;
    let isBudgetEnough = budget >= totalSum;
    let diff = Math.abs(budget - totalSum).toFixed(2);
    if(isBudgetEnough){
        console.log(`Ivanovi will be left with ${diff} leva after vacation.`)
    } else{
        console.log(`${diff} leva needed.`);
    }
}

solve(["500",
"7",
"66",
"15"])