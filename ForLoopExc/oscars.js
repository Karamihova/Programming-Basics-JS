function solve(input){
    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let examinersCount = Number(input[2]);
    let arePointsEnough = false;
    for (let i = 0; i < examinersCount * 2; i += 2) {
        let a = i + 3;
        let examinerName = input[a];
        let examinerPoints = Number(input[a+1]);
        
        let points = examinerName.length * examinerPoints / 2;
        academyPoints += points;

        if(academyPoints > 1250.5){
            arePointsEnough = true;
            break;
        }
    }

    if(arePointsEnough){
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
    } else {
        let pointDiff = 1250.5 - academyPoints;
        console.log(`Sorry, ${actorName} you need ${pointDiff.toFixed(1)} more!`)

    }
}

solve(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])