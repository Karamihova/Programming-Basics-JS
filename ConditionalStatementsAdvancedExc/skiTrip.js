function solve(input){
    let days = Number(input[0]);
    let nights = days - 1;
    let roomType = input[1];
    let mark = input[2];
    let totalCost = 0;

    if(nights < 10){
        if(roomType == "room for one person"){
            totalCost = nights * 18;
        } else if (roomType == "apartment"){
            totalCost = nights * 25;
            totalCost -= totalCost * 30 / 100;
        } else{
            totalCost = nights * 35;
            totalCost -= totalCost * 10 / 100;
        }
    } else if(nights >= 10 && nights <= 15){
        if(roomType == "room for one person"){
            totalCost = nights * 18;
        } else if (roomType == "apartment"){
            totalCost = nights * 25;
            totalCost -= totalCost * 35 / 100;
        } else{
            totalCost = nights * 35;
            totalCost -= totalCost * 15 / 100;
        }
    } else{
        if(roomType == "room for one person"){
            totalCost = nights * 18;
        } else if (roomType == "apartment"){
            totalCost = nights * 25;
            totalCost -= totalCost * 50 / 100;
        } else{
            totalCost = nights * 35;
            totalCost -= totalCost * 20 / 100;
        }
    }

    if(mark == "positive"){
        totalCost += totalCost * 25 / 100;
    } else{
        totalCost -= totalCost * 10 / 100;
    }

    console.log(`${totalCost.toFixed(2)}`);
}

solve(["30",
"president apartment",
"negative"])