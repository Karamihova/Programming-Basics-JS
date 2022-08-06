function solve(input){
    let seriesTitle = input[0];
    let episodeTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime / 8;
    let restTime = breakTime / 4;
    let spareTime = breakTime - (lunchTime + restTime);
    let timeLeft = Math.ceil(Math.abs(spareTime - episodeTime));
    if(spareTime >= episodeTime){
        console.log(`You have enough time to watch ${seriesTitle} and left with ${timeLeft} minutes free time.`);
    } else{
        console.log(`You don't have enough time to watch ${seriesTitle}, you need ${timeLeft} more minutes.`);
    }
}

solve(["Teen Wolf",
"48",
"60"])
