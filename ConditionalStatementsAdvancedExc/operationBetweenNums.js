function solve(input){
    let n = Number(input[0]);
    let m = Number(input[1]);
    let operation = input[2];
    let result = 0;

    if(operation == "+"){
        result = n + m;
    } else if (operation == "-"){
        result = n - m;
    } else if (operation == "*"){
        result = n * m;
    } else if (operation == "/" || operation == "%"){
        if(m == 0){
            console.log(`Cannot divide ${n} by zero`)
        }
        else{
            if(operation == "/"){
                result = n / m;
            } else{
                result = n % m;
            }
        }
    } 

    if(m != 0){
        if(operation == "+" || operation == "-" || operation == "*"){
            let isEven = result % 2 == 0;
            let number = null;
            if(isEven){
                number = "even";
            } else{
                number = "odd";
            }

            console.log(`${n} ${operation} ${m} = ${result} - ${number}`);

        } else{
            if(operation == "/"){
                console.log(`${n} ${operation} ${m} = ${result.toFixed(2)}`);

            } else{
                console.log(`${n} ${operation} ${m} = ${result}`);
            }
        }
    }
}

solve(["10",
"0",
"/"])