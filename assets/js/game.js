var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            this.health += 20;
            this.money -=7;
        }
        else {
            window.alert("You don't have enough money");
        }
    },
    upgradeAttack: function() {
        if(this.money >= 7) {
            this.attackk += 6;
            this.money -=7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
};
//function to generate a random numeric value
var randomNumber= function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};
var enemyInfo = [
    {
        name: "Roborto",
        attack:randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];
var fight = function(enemy) {
   //Alert players that they are starting the round
    while(playerInfo.health > 0 && enemy.health > 0) {
        var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                //subtract money form player.Info.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                break;
            }
        }
        else if (promptFight == "FIGHT" || promptFight == "fight"){
            //Subtract the value of 'player.Info.attack' from the value of 'enemy.health' and use that result to update the value in the 'enemy.health' variable
            //generate random damage value based on player's attack power
            var damage = randomNumber(playerInfo.attack - 3,playerInfo.attack);
            enemy.health = Math.max(0, enemy.health - damage);
            //Log a resulting message to the consoloe so we know that it worked.
            console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
            //Check enemy's health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died.");
                //award money for winning
                playerInfo.money = playerInfo.money + 20;
                //leave while() loop since enemy is dead
                break;
            }
            else {
                window.alert(enemy.name  + " still has " + enemy.health + " health left");
            }

            //Subtract the value of 'enemyAttac from the value of 'player.Info.health' and use that resukt to update the value in the 'player.Info.health' variable
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            playerInfo.health = Math.max(0, playerInfo.health - damage)

            //Log a resulting message to the console so we know that it worked
            console.log(
                enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
            //Check player's health
            if(playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                //leave while() lop if playeris dead
                break;
            }
            else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }
        }
    else {
            window.alert("You need to choose a valid option. Try again.")
        }
    } // end of while loop
}; // end of fight function
var startGame= function() {
    //reset player stats
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyObj = enemyInfo[i];

            pickedEnemyObj.health = randomNumber(40, 60);

        fight(pickedEnemyObj);
        }
        //if we're not at the last enemy in the array
        if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
            playerInfo.refillHealth();
            break;
        case "upgrade":
        case "UPGRADE":
            playerInfo.upgradeAttack();
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