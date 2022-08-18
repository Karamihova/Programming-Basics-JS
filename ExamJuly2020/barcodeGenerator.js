function solve(input){

    let start = input.shift();
    let end = input.shift();

    const nums = [];
    let index = 0;

    for (let i = 0; i < start.length; i++) {

        let num = Number(start[i]);
        if(num % 2 != 0){
            nums[index] = num;
            index++;
        }
        
    }

    for (let i = 0; i < end.length; i++) {

        let num = Number(end[i]);
        if(num % 2 != 0){
            nums[index] = num;
            index++;
        }
        
    }

    const uniqueNums = Array.from(new Set(nums));
    let a = Number(start);
    let b = Number(end);
    let isBarcode = true;
    const array = [];
    let arrIndex = 0;

    for (let i = a; i <= b; i++) {
       
       let num = i.toString();
        isBarcode = true;

       for (let j = 0; j < num.length; j++) {

        let currNum = Number(num[j]);
        
        if(!uniqueNums.includes(currNum)){
            isBarcode = false;
            break;
        }

        
       } 

       if(isBarcode){

            array[arrIndex] = num;
            arrIndex++;

        }
    }

    console.log(`${array.join(' ')}`);

}

solve(["3353",
"6579"]);