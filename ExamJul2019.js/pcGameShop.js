function solve(input){
    let n = Number(input.shift());

    let hearthstone = 0;
    let fornite = 0;
    let overwatch = 0;
    let others = 0;

    for (let i = 0; i < n; i++) {
        let game = input[i];
        switch (game) {
            case "Hearthstone":
                hearthstone++;
                break;
            case "Fornite":
                fornite++;
                break;
            case "Overwatch":
                overwatch++;
                break;
            default:
                others++;
                break;
        }
        
    }

    hearthstone = hearthstone / n * 100;
    fornite = fornite / n * 100;
    overwatch = overwatch / n * 100;
    others = others / n * 100;

    console.log(`Hearthstone - ${hearthstone.toFixed(2)}%`);
    console.log(`Fornite - ${fornite.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatch.toFixed(2)}%`);
    console.log(`Others - ${others.toFixed(2)}%`);

}

solve(["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"])