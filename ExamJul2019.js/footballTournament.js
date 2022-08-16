function solve(input){
    let teamName = input.shift();
    let gamesPlayed = Number(input.shift());
    let hasPlayed = true;

    if(gamesPlayed <= 0){
        hasPlayed = false;
    }

    let wins = 0;
    let remi = 0;
    let losses = 0;
    let totalPoints = 0;

    if(hasPlayed){

        for (let i = 0; i < gamesPlayed; i++) {
        let currInput = input[i];
        switch (currInput) {
            case "W":
                wins++;
                totalPoints += 3;
                break;
            case "D":
                remi++;
                totalPoints += 1;
                break;
            case "L":
                losses++
                break;
            default:
                break;
        }
        }

    }

    if(hasPlayed){

        console.log(`${teamName} has won ${totalPoints} points during this season.`);
        console.log("Total stats:");
        console.log(`## W: ${wins}`);
        console.log(`## D: ${remi}`);
        console.log(`## L: ${losses}`);

        let winPercentage = wins / gamesPlayed * 100;
        console.log(`Win rate: ${winPercentage.toFixed(2)}%`);
        
    } else{

        console.log(`${teamName} hasn't played any games during this season.`)

    }
    
}

solve(["Chelsea",
"0"])	