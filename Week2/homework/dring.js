let drinkTray = [];
const drinkTypes = ["cola", "lemonade", "water"];

for(i = 0; i<3 ; i++){

 for(j = 0; j < 2; j++){
    drinkTray.push("Hey guys, I brought a " + drinkTypes[i]);
    
 }

}
drinkTray.pop();
console.log(drinkTray)