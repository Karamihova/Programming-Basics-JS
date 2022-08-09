function solve(input){
    let width = Number(input[0]);
    let lenght = Number(input[1]);
    let height = Number(input[2]);
    let apartmentSpace = width * lenght * height;
    let boxSpace = 0;
    let diff = 0;
    let isSpaceEnough = true;
    let index = 3;

    while(true){
        let currInput = input[index];
        if(currInput === "Done"){
            break;
        }

        let currSpace = Number(currInput);
        boxSpace += currSpace;

        if(boxSpace > apartmentSpace){
            isSpaceEnough = false;
            break;
        }

        index++;
    }

    diff = Math.abs(apartmentSpace - boxSpace);
    if(isSpaceEnough){
        console.log(`${diff} Cubic meters left.`);
    } else{
        console.log(`No more free space! You need ${diff} Cubic meters more.`);
    }
}

solve(["10", 
"1",
"2",
"4", 
"6",
"Done"])