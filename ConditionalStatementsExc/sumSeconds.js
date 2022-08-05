function solve(input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let totalSecs = a + b + c;
    let minutes = Math.floor(totalSecs / 60);
    let seconds = totalSecs - (minutes * 60);
    if(seconds <= 9){
        console.log(`${minutes}:0${seconds}`);
    }else{
        console.log(`${minutes}:${seconds}`);
    }
}

solve(["50",
"50",
"49"])
;