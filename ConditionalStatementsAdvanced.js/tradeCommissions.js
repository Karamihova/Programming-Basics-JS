function solve(input){
    let city = input[0];
    let sale = Number(input[1]);
    let commission = 0;
    if (city == "Sofia") {
        if (sale >= 0 && sale <= 500) {
            commission = sale * 5 / 100;
        } else if(sale > 500 && sale <=1000){
            commission = sale * 7 / 100;
        } else if(sale > 1000 && sale <= 10000){
            commission = sale * 8 / 100;
        } else if (sale > 10000){
            commission = sale * 12 / 100;
        } else{
            console.log("error");
        }

    } else if(city == "Varna"){
        if (sale >= 0 && sale <= 500) {
            commission = sale * 4.5 / 100;
        } else if(sale > 500 && sale <=1000){
            commission = sale * 7.5 / 100;
        } else if(sale > 1000 && sale <= 10000){
            commission = sale * 10 / 100;
        } else if (sale > 10000){
            commission = sale * 13 / 100;
        } else{
            console.log("error");
        }
    } else if (city == "Plovdiv"){
        if (sale >= 0 && sale <= 500) {
            commission = sale * 5.5 / 100;
        } else if(sale > 500 && sale <=1000){
            commission = sale * 8 / 100;
        } else if(sale > 1000 && sale <= 10000){
            commission = sale * 12 / 100;
        } else if (sale > 10000){
            commission = sale * 14.5 / 100;
        } else{
            console.log("error");
        }
    } else{
        console.log("error");
    }

    if (commission > 0) {
        console.log(commission.toFixed(2));
    }
}

solve(["Varna",
"3874.50"])