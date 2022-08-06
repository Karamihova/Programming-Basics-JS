function solve(input){
    let animal = input[0];
    let type = null;

    switch (animal) {
        case "dog":
            type = "mammal"
            break;
        case "crocodile":
        case "snake":
        case "tortoise":
            type = "reptile";
            break;
        default:
            type = "unknown";
            break;
    }

    console.log(type);
}