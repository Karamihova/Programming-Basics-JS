function solve(input){

    let start = Number(input.shift());
    let end = Number(input.shift());
    let correctBarcodes = "";

    for (let i = start; i <= end; i++) {
        let barcode = i.toString();
        let isCorrect = true;

        for (let j = 0; j < 4; j++) {
            
            let num = Number(barcode[j]);
            if(num % 2 == 0){
                isCorrect = false;
                break;
            }
        }

        if(isCorrect){
            correctBarcodes += `${barcode} `;
        }
    }

    console.log(correctBarcodes);

}

solve(["2345",
"6789"])