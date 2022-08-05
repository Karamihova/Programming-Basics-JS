function solve(input){
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let veggieMenus = Number(input[2]);
    let delivery = 2.5;
    let menuCost = (chickenMenus * 10.35) + (fishMenus * 12.4) + (veggieMenus * 8.15);
    let dessert = menuCost * 20 / 100;
    let totalCost = menuCost + dessert + delivery;
    console.log(totalCost);
}

solve(["2 ",
"4 ",
"3 "]);