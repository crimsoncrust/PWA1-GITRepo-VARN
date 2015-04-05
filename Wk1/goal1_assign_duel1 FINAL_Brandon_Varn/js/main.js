//Brandon C Varn using the completed file and adding psudocode.// 

//This was a confusing assignment as we did not need to code, so that bit through me off//


//Starting Function//
// self-executing function
(function(){
	//putting on screen fight with log in console//

    console.log("FIGHT!!!");
	//creating variable names for our two fighters//
    //player name
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";
	//Creating the damage our two fighters can output//
    //player damage
    var player1Damage = 20;
    var player2Damage = 20;
	//Showing that each player has 100 percent health//
    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;
	//creating a variable for the initial round//
    //initiate round
    var round=0;
	//creating a fight function nested inside the executable function//
    function fight(){
	    //Adding an alert to pop up stating the players name and health as well as the round start//
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
        //Creating a for loop creating a 10 round match starting at 0 ending at 10//
        for (var i = 0; i < 10; i++)
        {
	        //Creating the amount of damage done creatin variables to represent this the math is damage time .5//
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            //using the Math element to randomize the player damage using the formula given//
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);
			//subtracting the player health using the f1 and f2 variables//
            //inflict damage
            playerOneHealth-=f1;
            playerTwoHealth-=f2;
			//console loggin the health after each round//
            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);
			//creating a function for the winner called winnerCheck//
            //check for victor
            var result = winnerCheck();
            //consolue logging the result of the winner//
            console.log(result);
            //creating a if statement for no winner//
            if (result==="no winner")
            {
                round++;
                //alerting the winner of the match and the round//
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);
			//ending the loop//
            } else{
                alert(result);
                break;
            };

          };
    };
	//creating a winner check function//
    function winnerCheck(){
	    //creating a variable for no winner/
        var result="no winner";
        //creating a if else statement stating if both players go below 0 you both die//
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both Die";
        //creating a else statment player two wins//
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
            //creating a else if statement if player one wins//
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!!!"
        };
       return result;
    };

    /*******  The program gets started below *******/
    
	//calling the program to begin//
    fight();

})();