function solve(input){
    let number = Number(input[0]);
    let bonuses = 0;

    if(number <= 100){
        bonuses += 5;
    } else if (number > 100 && number <= 1000){
        bonuses = number * 20 / 100;
    } else {
        bonuses = number * 10 / 100;
    }

    if(number % 2 == 0){
        bonuses += 1;
    }

    if(number % 5 == 0 && number % 10 != 0){
        bonuses += 2;
    }

    console.log(bonuses);

    let bonusScore = number + bonuses;
    console.log(bonusScore);
}

solve(["20"]);