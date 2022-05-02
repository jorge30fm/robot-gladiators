var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth =50;
var enemyAttack = 12;

var fight = function(enemyName) {
    //Alert players that they are starting the round
    while(playerHealth > 0 && enemyHealth > 0) {
        var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money form playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
        else if (promptFight == "FIGHT" || promptFight == "fight"){
            //Subtract the value of 'PlayerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
            enemyHealth = enemyHealth - playerAttack;
            //Log a resulting message to the consoloe so we know that it worked.
            console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
            //Check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died.");
                //award money for winning
                playerMoney = playerMoney + 20;
                //leave while() loop since enemy is dead
                break;
            }
            else {
                window.alert(enemyName  + " still has " +enemyHealth + " health left");
            }

            //Subtract the value of 'enemyAttac from the value of 'playerHealth' and use that resukt to update the value in the 'playerHealth' variable
            playerHealth = playerHealth - enemyAttack;

            //Log a resulting message to the console so we know that it worked
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
            //Check player's health
            if(playerHealth <= 0) {
                window.alert(playerName + " has died!");
                //leave while() lop if playeris dead
                break;
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }
    else {
            window.alert("You need to choose a valid option. Try again.")
    }
    } // end of while loop
}; // end of fight function
var startGame= function() {
    //reset player stats
    playerAttack ==10;
    playerHealth = 100;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyName = enemyNames[i];

            enemyHealth= 50;

            debugger;

        fight(pickedEnemyName);
        }
        //if we're not at the last enemy in the array
        if (playerHealth > 0 && i < enemyNames.length - 1) {
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
            if(storeConfirm){
                shop();
            }
        }
        else {
            window.alert("You have lost your robot in battle! Gave Over!");
            break;
        }
    }
    //play again
    endGame();
}
//function to en the entire game
var endGame = function() {
    //if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robt in battle.");
    }
    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!")
    }
}
var shop = function() {
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store?Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    switch(shopOptionPrompt) {
        case "refill":
        case "REFILL":
            if (playerMoney >= 7){
                window.alert("Refilling player's health by 2o for 7 dollars.");
            // Increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "upgrade":
        case "UPGRADE":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars");
                // Increase attacck and decrease money
                playerAttack = playerAttack + 6;
                playerMoney =playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
                break;
        case "leave":
        case "LEAVE":
            window.alert("Leaving the store");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;

}
};
//start game when page loads
startGame();