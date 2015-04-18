//Brandon C Varn
//Duel 2 
//april 2015

// self-executing function
(function(){

    console.log("FIGHT!!!");

    //create players
    var fighter1 = ["Spiderman", 20, 100]; //arrange player name, player damage, and player beginning health 
    var fighter2 = ["Batman", 20, 100]; //arrange player name, player damage, and player beginning health 

    //player damage
    //this variable determines the amount of maximum damage per round that the player causes
    //Old code: var player1Damage = 20;
    //Old code: var player2Damage = 20;

    //player health
    //initiate round
    //keep track of what round the players are currently fighting in
    var round=1; //Old code held a "0"; define as a global variable for fighter rounds

    //this function contains the code that loops through rounds and reduces the player’s health accordingly
    function fight(){
        console.log("In the fight function");
        alert(fighter1[0] + ":" + fighter1[2] + " *START* "+ fighter2[0] + ":" + fighter2[2]); //alert user to begin fight

        for (var i = 0; i < 10; i++) //set FOR loop to keep running through rounds
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            //Damage occurs to both players at a random amount between half damage and maximum damage
            var minDamage1 = fighter1[1] * .5; //create variable for minimum damage 
            var minDamage2 = fighter2[1] * .5;//create variable for minimum damage 
            //create variables for each player to hold the random number
            //math.floor rounds number to integer
            //math.random generates number between 0 and 1
            var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2)+minDamage2);
            //console.log f1 and f2 to make sure that random number formula is working
            console.log(f1);
            console.log(f2);

            //subtract random number from each player's health
            fighter1[2]-=f1;
            fighter2[2]-=f2;

            //console "points" that are being subtracted from each player's health
            console.log(fighter1[0] + ": " + fighter1[2] + " " + fighter2[0] + ":"+ fighter2[2]);

            //check for winner
            var result = winnerCheck(); //create variable to hold result, using winnerCheck function
            console.log(result);
            if (result==="no winner") //if result in winnerCheck strictly equals variable of no winner, then code will loop and add another round
            {
                round++; //increment round by one (round one goes to round two, so on)
                alert(fighter1[0] + ":" + fighter1[2] + "*ROUND " +round+" OVER" +"*  "+ fighter2[0] + ":" + fighter2[2]); //alert user that new round is beginning

            } else{ //if there is a result that does not strictly equal no winner
                alert(result);
                break; //escape out of the loop if the fight is over before the 10 rounds 
            };

        };
    };

    //runs at the end of every fight round to check if there is a winner
    //this function is invoked after each round and returns a string of either the winner, the loser, a tie (both die) or no winner yet. 
    function winnerCheck(){
        console.log("In the winner check function");
        var result="no winner";
        if (fighter1[2]<1 && fighter2[2]<1) //if player 1 health is less than one AND player 2 health is less than 1, then there will be a result that both players die
        {
            result = "You Both Die";
        } else if(fighter1[2]<1){ //if above condition is not met
            result =fighter2[0]+" WINS!!!"
        } else if (fighter2[2]<1) //if above condition is not met, player 1 wins
        {
            result = fighter1[0]+" WINS!!!"
        };
        return result; //return winnerCheck information to results variable to use that information again
    };

    /*******  The program gets started below *******/
    fight(); //invoke fight function

})();