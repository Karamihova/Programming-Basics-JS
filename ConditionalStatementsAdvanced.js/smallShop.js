function solve(input){
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let finalPrice = 0;

    if (city == "Sofia") {
        if(product == "coffee"){
            finalPrice = quantity * 0.5;
        } else if(product == "water"){
            finalPrice = quantity * 0.8;
        } else if(product == "beer"){
            finalPrice = quantity * 1.2;
        } else if (product == "sweets"){
            finalPrice = quantity * 1.45;
        } else if (product == "peanuts"){
            finalPrice = quantity * 1.6;
        }
    } else if(city == "Plovdiv"){
        if(product == "coffee"){
            finalPrice = quantity * 0.4;
        } else if(product == "water"){
            finalPrice = quantity * 0.7;
        } else if(product == "beer"){
            finalPrice = quantity * 1.15;
        } else if (product == "sweets"){
            finalPrice = quantity * 1.3;
        } else if (product == "peanuts"){
            finalPrice = quantity * 1.5;
        }
    } else if (city == "Varna"){
        if(product == "coffee"){
            finalPrice = quantity * 0.45;
        } else if(product == "water"){
            finalPrice = quantity * 0.7;
        } else if(product == "beer"){
            finalPrice = quantity * 1.1;
        } else if (product == "sweets"){
            finalPrice = quantity * 1.35;
        } else if (product == "peanuts"){
            finalPrice = quantity * 1.55;
        }
    }

    console.log(finalPrice)
}

solve(["peanuts",
"Plovdiv",
"1"]);