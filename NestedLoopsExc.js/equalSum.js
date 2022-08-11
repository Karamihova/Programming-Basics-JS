function solve(input){
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let printLine = '';
    for (let i = n1; i <= n2; i++) {
        let num = i.toString();
        let evenSum = 0;
        let oddSum = 0;

        for (let x = 0; x < 6; x++) {
            
            let currNum = Number(num[x]);
            if(x % 2 == 0){
                evenSum += currNum;
            }
            else{
                oddSum += currNum;
            }
        }

        if(evenSum === oddSum){
            printLine += `${i} `;
        }
        
    }

    console.log(printLine);
}

solve(["100000",
"100050"])