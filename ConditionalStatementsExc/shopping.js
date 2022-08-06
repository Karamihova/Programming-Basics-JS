function solve(input){
    let budget = Number(input[0]);
    let videocards = Number(input[1]);
    let procecors = Number(input[2]);
    let ram = Number(input[3]);

    let videocardsTotalCost = videocards * 250;
    let procecorPrice = videocardsTotalCost * 35 / 100;
    let procecorsTotalCost = procecorPrice * procecors;
    let ramPrice = videocardsTotalCost * 10 / 100;
    let ramTotalCost = ram * ramPrice;
    let totalCost = videocardsTotalCost + procecorsTotalCost + ramTotalCost;

    if(videocards > procecors){
        totalCost = totalCost - (totalCost * 15 / 100);
    }

    let isMoneyEnough = budget >= totalCost;
    let moneyDifference = Math.abs(budget - totalCost).toFixed(2);

    if(isMoneyEnough){
        console.log(`You have ${moneyDifference} leva left!`);
    } else{
        console.log(`Not enough money! You need ${moneyDifference} leva more!`);
    }
}

solve(["920.45",
"3",
"1",
"1"]);