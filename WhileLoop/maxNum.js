function solve(input){
    let minNum = Number.MAX_SAFE_INTEGER;
    let index = 0;
    let currInput = null;

    while(true){

        currInput = input[index];

        if(currInput == "Stop"){
            break;
        }
        
        let num = Number(currInput);
        if(num < minNum){
            minNum = num;
        }

        index++;

    }

    console.log(minNum);
}

solve(["-1",
"-2",
"Stop"])