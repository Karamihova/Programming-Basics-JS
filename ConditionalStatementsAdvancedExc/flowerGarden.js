function solve(input){
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);
    let totalCost = 0;
    switch (flowerType) {
        case "Roses":
            totalCost = 5 * flowerCount;
            if (flowerCount > 80) {
                totalCost = totalCost - (totalCost * 10 / 100);
            }
            break;
        case "Dahlias":
            totalCost = 3.8 * flowerCount;
            if (flowerCount > 90) {
                totalCost = totalCost - (totalCost * 15 / 100);
            }
            break;
        case "Tulips":
            totalCost = 2.8 * flowerCount;
            if (flowerCount > 80) {
                totalCost = totalCost - (totalCost * 15 / 100);
            }
            break;
        case "Narcissus":
            totalCost = 3 * flowerCount;
            if(flowerCount < 120){
                totalCost = totalCost + (totalCost * 15 / 100);
            }
            break;
        case "Gladiolus":
            totalCost = 2.5 * flowerCount;
            if(flowerCount < 80){
                totalCost = totalCost + (totalCost * 20 / 100);
            }
        break;
        default:
            break;
    }

    let isMoneyEnough = budget >= totalCost;
    let difference = Math.abs(budget - totalCost);

    if(isMoneyEnough){
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${difference.toFixed(2)} leva left.`);
    } else{
        console.log(`Not enough money, you need ${difference.toFixed(2)} leva more.`);
    }
}

solve(["Tulips",
"88",
"260"])