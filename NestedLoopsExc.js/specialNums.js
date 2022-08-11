function solve(input){
    let specialNum = Number(input[0]);
    let str = "";
    for (let i = 1111; i <= 9999; i++) {

        let isDivisible = true;
        let numText = i.toString();
        for (let n = 0; n < 4; n++) {
          let currNum = Number(numText[n]);

            if(specialNum % currNum != 0){
                isDivisible = false;
                break;
            }
        }
        
        if(isDivisible){
            str += `${i} `;
        }
    }

    console.log(str);
}

solve(["3"])