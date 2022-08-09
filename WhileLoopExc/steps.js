function solve(input){
    let index = 0;
    let currInput = null;
    let goalSteps = 10000;
    let totalSteps = 0;
    while(true){

        currInput = input[index];

        if(currInput === "Going home"){
            let currSteps = Number(input[index + 1]);
            totalSteps += currSteps;
            break;
        }

        let currSteps = Number(currInput);
        totalSteps += currSteps;
        if(totalSteps >= goalSteps){
            break;
        }

        index++;
    }

    let goalReached = totalSteps >= goalSteps;
    let diff = Math.abs(totalSteps - goalSteps);
    if(goalReached){
        console.log(`Goal reached! Good job!`)
        console.log(`${diff} steps over the goal!`)
    } else{
        console.log(`${diff} more steps to reach goal.`);
    }
}

solve(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])
