function solve(input){

    let start = Number(input.shift());
    let finish = Number(input.shift());

    let s1 = Math.floor((start / 1000) % 10);
    let s2 = Math.floor((start / 100) % 10);
    let s3 = Math.floor((start / 10) % 10);
    let s4 = Math.floor(start % 10);

    let f1 = Math.floor((finish / 1000) % 10);
    let f2 = Math.floor((finish / 100) % 10);
    let f3 = Math.floor((finish / 10) % 10);
    let f4 = Math.floor(finish % 10);
    let str = "";

    for (let i = s1; i <= f1; i++) {
       
        for (let j = s2; j <= f2; j++) {
            
            for (let k = s3; k <= f3; k++) {
                
                for (let l = s4; l <= f4; l++) {
                    
                    if(i % 2 != 0 && j % 2 != 0 && k % 2 != 0 && l % 2 != 0){
                        str += `${i}${j}${k}${l} `;
                    }
                    
                }
                
            }

        }
        
    }

    console.log(str);

}

solve(["3256",
"6579"])