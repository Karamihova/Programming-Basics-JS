function solve(input){
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let totalPrice = 0;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (fruit) {
                case "banana":
                    totalPrice = quantity * 2.5;
                    break;
                case "apple":
                    totalPrice = quantity * 1.2;
                    break;
                case "orange":
                    totalPrice = quantity * 0.85;
                    break;
                case "grapefruit":
                    totalPrice = quantity * 1.45;
                    break;
                case "kiwi":
                    totalPrice = quantity * 2.7;
                    break;
                case "pineapple":
                    totalPrice = quantity * 5.5;
                    break;
                case "grapes":
                    totalPrice = quantity * 3.85;
                    break;
                default:
                    console.log("error");
                    break;
            }
            break;
        case "Saturday":
        case "Sunday":
            switch(fruit){
                case "banana":
                    totalPrice = quantity * 2.7;
                    break;
                case "apple":
                    totalPrice = quantity * 1.25;
                    break;
                case "orange":
                    totalPrice = quantity * 0.9;
                    break;
                case "grapefruit":
                    totalPrice = quantity * 1.6;
                    break;
                case "kiwi":
                    totalPrice = quantity * 3;
                    break;
                case "pineapple":
                    totalPrice = quantity * 5.6;
                    break;
                case "grapes":
                    totalPrice = quantity * 4.2;
                    break;
                default:
                    console.log("error");
                    break;
            }
            break;
        default:
            console.log("error");
            break;
    }

    if (totalPrice != 0) {
        console.log(totalPrice.toFixed(2));
    }
}

solve(["kiwi",
"Monday",
"2.5"])