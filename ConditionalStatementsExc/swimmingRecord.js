function solve(input){
    let recordSecs = Number(input[0]);
    let recordMeters = Number(input[1]);
    let secsPerMeterTime = Number(input[2]);

    let totalSecs = recordMeters * secsPerMeterTime;
    let slowTime = Math.floor(recordMeters / 15) * 12.5;
    totalSecs += slowTime;
    let isRecord = totalSecs < recordSecs;
    let timeLeft = Math.abs(totalSecs - recordSecs);
    if(isRecord){
        console.log(`Yes, he succeeded! The new world record is ${totalSecs.toFixed(2)} seconds.`);
    } else{
        console.log(`No, he failed! He was ${timeLeft.toFixed(2)} seconds slower.`);
    }
}

solve(["55555.67",
"3017",
"5.03"]);