function solve(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);
    let isConditionMet = false;
    let combinationsCount = 0;

    for (let n = start; n <= end; n++) {

        for (let m = start; m <= end; m++) {
            let num = n + m;
            combinationsCount++;
            if(num === magicNum){
                isConditionMet = true;
                console.log(`Combination N:${combinationsCount} (${n} + ${m} = ${num})`);
                break;
            }
            
        }

        if(isConditionMet){
            break;
        }
        
    }

    if(!isConditionMet){
        console.log(`${combinationsCount} combinations - neither equals ${magicNum}`);
    }
}

solve(["88", 
"888", 
"2000"])