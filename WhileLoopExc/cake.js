function solve(input){
    let width = Number(input[0]);
    let lenght = Number(input[1]);
    let cake = width * lenght;
    let index = 2;
    let isEnough = true;
    let diff = 0;
    while(true){

        let currInput = input[index];
        if(currInput === "STOP"){
            break;
        }

        let pieces = Number(currInput);
        if(pieces > cake){
            isEnough = false;
            diff = pieces - cake;
            break;
        }

        cake -= pieces;
        index++;
    }

    if(isEnough){
        console.log(`${cake} pieces are left.`);
    } else{
        
        console.log(`No more cake left! You need ${diff} pieces more.`);
    }

}

solve(["10",
"2",
"2",
"4",
"6",
"STOP"])