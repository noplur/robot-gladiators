// function to start a new game
var startGame = function() {
  // reset player stats
  playerInfo.reset();

  // pick new enemy to fight based on the index of the enemyInfo array
  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
      var pickedEnemyObj = enemyInfo[i];

  // set health for picked enemy
  pickedEnemyObj.health = randomNumber(40, 60);

  console.log(pickedEnemyObj);

  // pass the pickedEnemyObj object variable's value into the fight function, where it will assume the value of the enemy parameter
  fight(pickedEnemyObj);
}
// if player is not alive, break out of the loop and let endGame function run
else {
  break;
  }
}

// after loop ends, we are either out of player.health or enemies to fight, so run the endGame function
endGame();
};

// function to end the entire game
var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!");

  // if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of" + playerInfo.money + '.');
  } else {
    window.alert("You've lost your robot in battle!");
  }

  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm('Would you like to play again?');

  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert('Thank you for playing Battlebots! Come back soon!');
  }
};

var fightOrSkip = function() {
  // ask player if they'd like to fight or skip using fightOrSkip function
  promptFight = promptFight.toLowerCase();

if (promptFight === "skip") {
  // repeat and execute as long as the enemy-robot is alive 
while(enemy.health > 0 && playerInfo.health > 0) {
  fightOrSkip(); // <-- Replace code with this function call
  var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

  // if player picks "skip" confirm and then stop the loop
  if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerInfo.playerMoney = playerInfo.money - 10;
      shop();
    }
  }
}

// keep track of who goes first
var isPlayerTurn = true;
  if (Math.random() > 0.5) {
  isPlayerTurn = false;
}

// fight function (now with parameter for enemy's name)
var fight = function(enemy) {
  // keep track of who goes first
  var isPlayerTurn = true;
​
  // randomly change turn order
  if (Math.random() > 0.5) {
    isPlayerTurn = false;
  }
​
  while (playerInfo.health > 0 && enemy.health > 0) {
    if (isPlayerTurn) {
      // ask player if they'd like to fight or skip using fightOrSkip function
      if (fightOrSkip()) {
        // if true, leave fight by breaking loop
        break;
      }
​
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
​
      // remove enemy's health by subtracting the amount we set in the damage variable
      enemy.health = Math.max(0, enemy.health - damage);
      console.log(
        playerInfo.name +
          " attacked " +
          enemy.name +
          ". " +
          enemy.name +
          " now has " +
          enemy.health +
          " health remaining."
      );
​
      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");
​
        // award player money for winning
        playerInfo.money = playerInfo.money + 20;
​
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
      }
      // player gets attacked first
    } else {
      var damage = randomNumber(enemy.attack - 3, enemy.attack);
​
      // remove player's health by subtracting the amount we set in the damage variable
      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(
        enemy.name +
          " attacked " +
          playerInfo.name +
          ". " +
          playerInfo.name +
          " now has " +
          playerInfo.health +
          " health remaining."
      );
​
      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
      }
    }
    // switch turn order for next round
    isPlayerTurn = !isPlayerTurn;
  }
};


    // remove players's health by subtracting the amount set in the enemyAttack variable
    var damage = randomNumber(enemyAttack - 3, enemyAttack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemyName + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );



    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  }
};
// go to shop between battles function
var shop = function() {
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", or "LEAVE" to make a choice.'
  );
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
  );
  
 // use switch case to carry out action
 switch (shopOptionPrompt) {
  case 1:
    playerInfo.refillHealth();
    break;
  case 2:
    playerInfo.upgradeAttack();
    break;
  case 3:
    window.alert("Leaving the store.");
    break;
  default:
    window.alert("You did not pick a valid option. Try again.");
    shop();
    break;
}
};
// function to genrate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

/* END GAME FUNCTIONS */

/* GAME INFORMATION / VARIABLES */

// function to set name
var getPlayerName = function() {
  var name = "";

  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }

  console.log(""Your robot's name is "" + name);
  return name;
};

/* GAME INFORMATION / VARIABLES */
  var playerInfo = {
  name: getPlayerName(),
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
    window.alert("Refilling player's health by 20 for 7 dollars.");
    this.health += 20;
    this.money -= 7;
  },
upgradeAttack: function() {
    window.alert("Upgrading player's attack by 6 for 7 dollars.");
    this.attack += 6;
    this.money -= 7;
  } 
};

 // enemy information
 var enemyInfo = [
  {
    name: 'Roborto',
    attack: randomNumber(10, 14)
  },
  {
    name: 'Amy Android',
    attack: randomNumber(10, 14)
  },
  {
    name: 'Robo Trumble',
    attack: randomNumber(10, 14)
  }
];

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);

/* END GAME INFORMATION / VARIABLES */

/* RUN GAME */
startGame();