function solve(input){
    let index = 0;
    let primeSum = 0;
    let nonPrimeSum = 0;

    while(true){
        let currInput = input[index];
        if(currInput === "stop"){
            break;
        }

        let num = Number(currInput);

        if(num < 0){
            console.log("Number is negative.");
            index++;
            continue;
        }

        if(num % 2 == 0){
            if(num === 2){
                primeSum += num;
            }
            else{
                nonPrimeSum += num;
            }
        } else{
            if(num === 3){
                primeSum += num;
            }
            else{
                if(num % 3 == 0){
                    nonPrimeSum += num;
                }
                else{
                    primeSum += num;
                }
            }
        }

        index++;
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

solve(["30",
"83",
"33",
"-1",
"20",
"stop"])