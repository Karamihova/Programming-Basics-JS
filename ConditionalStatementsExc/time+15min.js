function solve(input){
    let hour = Number(input[0]);
    let seconds = Number(input[1]);

    if(seconds < 45){
        seconds +=15;
    } else if(seconds >= 15 && hour < 23){
        hour += 1;
        let left = 60 - seconds;
        seconds = 15 - left;
    } else if(seconds >= 45 && hour == 23){
        hour = 0;
        let left = 60 - seconds;
        seconds = 15 - left;
    }

    if(seconds < 10){
        console.log(`${hour}:0${seconds}`);
    } else{
        console.log(`${hour}:${seconds}`);
    }
}

solve(["23", "59"]);