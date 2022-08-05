function solve(input){
    let vacationPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let totalCost = (puzzles * 2.6) + (dolls * 3) + (teddyBears * 4.1) + (minions * 8.2) + (trucks * 2);
    let totalToys = puzzles + dolls + teddyBears + minions + trucks;
    if(totalToys >= 50){
        totalCost = totalCost - (totalCost * 25 / 100);
    }

    let rent = totalCost * 10 / 100;
    totalCost -= rent;

    let isEnoughMoney = totalCost >= vacationPrice;
    if(isEnoughMoney){
        let leftover = totalCost - vacationPrice;
        console.log(`Yes! ${leftover.toFixed(2)} lv left.`);
    } else{
        let left = vacationPrice - totalCost;
        console.log(`Not enough money! ${left.toFixed(2)} lv needed.`);
    }
}

solve(["320",
"8",
"2",
"5",
"5",
"1"]);