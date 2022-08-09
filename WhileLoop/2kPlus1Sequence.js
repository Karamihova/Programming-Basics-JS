function solve(input){
    let targetNum = Number(input[0]);
    let counter = 0;
    let start = 0;

    while(true){

        start = 2 * counter + 1;

        if(start > targetNum){
            break;
        }

        console.log(start);
        counter = start;
    }
}

solve(["17"])