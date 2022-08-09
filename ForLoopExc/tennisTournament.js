function solve(input){
    let tournaments = Number(input[0]);
    let rangePoints = Number(input[1]);
    let totalPoints = 0;
    let wins = 0;

    for (let i = 2; i <= tournaments + 2; i++) {
        let game = input[i];
        if(game == "W"){
            wins ++;
            totalPoints += 2000;
        } else if (game == "F"){
            totalPoints += 1200;
        } else if (game == "SF"){
            totalPoints += 720;
        }
    }

    let finalPoints = totalPoints + rangePoints;
    let averagePointsPerGame = totalPoints / tournaments;
    let winPercantage = wins / tournaments * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(averagePointsPerGame)}`);
    console.log(`${winPercantage.toFixed(2)}%`);
}

solve(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])