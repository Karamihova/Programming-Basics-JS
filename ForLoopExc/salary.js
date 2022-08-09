function solve(input){
    let tabsOpened = Number(input[0]);
    let salary = Number(input[1]);
    for (let i = 0; i < tabsOpened; i++) {

        let tab = input[i+2];
        if(tab == "Facebook"){
            salary -= 150;
        } else if (tab == "Instagram"){
            salary -= 100;
        }  else if(tab == "Reddit"){
            salary -= 50;
        }

        if(salary <= 0){
            console.log("You have lost your salary.");
            break;
        }
    }

    if(!salary <= 0){
        console.log(salary);
    }
}

solve(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])