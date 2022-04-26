var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth =50;
var enemyAttack = 12;

var fight = function(enemyName) {
    //Alert players that they are starting the round
    whil(enemyHealth > 0) {
        var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        //If player choses to fight, then fiht
        if(promptFight === "fight" || promptFight === "FIGHT") {
            //Subtract the value of 'PlayerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
            enemyHealth = enemyHealth - playerAttack;

            //Log a resulting message to the consoloe so we know that it worked.
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
                );
            //Check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died.");
            }
            else {
                window.alert(enemyName  + " still has " +enemyHealth + " health left");
            }

            //Subtract the value of 'enemyAttac from the value of 'playerHealth' and use that resukt to update the value in the 'playerHealth' variable
            playerHealth = playerHealth - enemyAttack;

            //Log a resulting message to the console so we know that it worked
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
            //Check player's health
            if(playerHealth <= 0) {
                window.alert(playerName + " has died!");
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }
        else if (promptFight === " skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            //if yes (true), leave fight
            if(confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight!");
            }
            //if no (false), ask question again by rinning fight() again
            else {
                fight();
            }
        }
        else {
            window.alert("You need to chose a valid option. Try again!")
        }
    }

};
for (var i = 0; i < enemyNames.length, i++) {
    fight(enemyNames[i]);
// fight ();