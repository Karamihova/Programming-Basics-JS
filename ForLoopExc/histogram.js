function solve(input){
    let num = Number(input[0]);

    let less200 = 0;
    let between200And399 = 0;
    let between400and599 = 0;
    let between600And799 = 0;
    let above800 = 0;

    for (let i = 1; i <= num; i++){
        let element = Number(input[i]);
        if(element < 200){
            less200++;
        } else if(element >= 200 && element <= 399){
            between200And399++;
        } else if (element >= 400 && element <= 599){
            between400and599++;
        } else if (element >= 600 && element <= 799){
            between600And799++;
        } else if (element >= 800){
            above800++;
        }
    }

    let p1 = less200 / num * 100;
    let p2 = between200And399 / num * 100;
    let p3 = between400and599 / num * 100;
    let p4 = between600And799 / num * 100;
    let p5 = above800 / num * 100;

    let array = [p1, p2, p3, p4, p5];
    for (let i = 0; i < array.length; i++) {
        let element = array[i].toFixed(2);
        console.log(`${element}%`);        
    }
}

solve(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])

