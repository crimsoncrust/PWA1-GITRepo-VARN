//Brandon C Varn
//Duel 2 
//april 2015




// self-executing function
(function(){ 

    console.log("FIGHT!!!"); 

    //DOM variables
    var fighter1_txt = document.querySelector("#bm").querySelector("p");
    var fighter2_txt = document.querySelector("#rid").querySelector("p");
    var round_txt = document.querySelector("h5");
    var button = document.getElementById("fight_btn");

    button.addEventListener("click", fight, false);

    var fighters = [
        {
            name:"Batman",
            damage:20,
            health:100
        },
        {
            name:"Riddler",
            damage:20,
            health:100
        }];

    //initiate round
    var round = 1;  

    //DOM innerHTML
    round_txt.innerHTML = "Click FIGHT Button to Start!";
    fighter1_txt.innerHTML = fighters[0].name + ": " + fighters[0].health;
    fighter2_txt.innerHTML = fighters[1].name + ": " + fighters[1].health;

    function fight(){ 

        fighter1_txt.innerHTML = fighters[0].name + ": " + fighters[0].health;
        fighter2_txt.innerHTML = fighters[1].name + ": " + fighters[1].health;

            var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage *.5);
            var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage *.5); 

            //Inflict Damage
            fighters[0].health -= f1; 
            fighters[1].health -= f2; 

            console.log(fighters[0].health, fighters[1].health);  

            //Winner Check
            var result = winnerCheck();  
            console.log(result);  // Display result in console

            round_txt.innerHTML = "Round #" + round + " Results:";
            round++; // Round incrementally increased by one
            if (result === "no winner")  // If statement to continue game if no winner
            {
                fighter1_txt.innerHTML = fighters[0].name + ": " + fighters[0].health;
                fighter2_txt.innerHTML = fighters[1].name + ": " + fighters[1].health;

            } else{
                fighter1_txt.innerHTML = result;
                fighter2_txt.innerHTML = "";

                button.removeEventListener("click", fight, false);

                document.querySelector('.buttonblue').innerHTML = "FINISHED!";

            };

    };

    function winnerCheck(){  // Function to calculate if there is a winner
        var result = "no winner";  // Result is string "no winner"
        if (fighters[0].health < 1 && fighters[1].health < 1) // If statement for both players losing
        {
            result = "You Both Died - GAME OVER";  // Both players losing results in string of "You both die"
        } else if(fighters[0].health < 1){ // Else if statement if player 2 wins
            result = fighters[1].name + " WINS!!!"  // Result is Batman wins
        } else if (fighters[1].health < 1)  // Else if statement if player 1 wins
        {
            result = fighters[0].name + " WINS!!!"  // Result is Spiderman wins
        };
       return result; // Return result to previous code
    };

})();