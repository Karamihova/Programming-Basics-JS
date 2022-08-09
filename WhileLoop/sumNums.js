function solve(input){
    let targetNum = Number(input[0]);
    let index = 1;
    let sum = 0;
    while(true){

       sum += Number(input[index]);
       if(sum >= targetNum){
            break;
       }

       index++;

    }

    console.log(sum);

}

solve(["20",
"1",
"2",
"3",
"4",
"5",
"6"])