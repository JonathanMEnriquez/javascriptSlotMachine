function playSlots(quarters) {
    var winner = Math.trunc(Math.random() * 100);
    var winnings = Math.trunc(Math.random()*50)+50;
    var chance = 0;

    for (var i = quarters; i > -1; i--) {
        chance = Math.trunc(Math.random() * 100);

        if (chance == winner) {
            console.log("CONGRATULATIONS! HERE ARE YOUR "+winnings+" quarters");
            if (i > 0) {
                console.log("You still have "+i+" quarters left! Lucky!")
            }
            break;
        }
        if (i == 0) {
            console.log("Oh no! Sorry. Maybe gambling isn't for you?");
        }
    }   
}

playSlots(100)