var you;
var yourScore=0;
var opponent;
var opponentScore=0;

var choices = ["scissor","paper","rock"];
window.onload=function(){
    for(let i = 0;i<3;i++){
        let choice = document.createElement("img");
        choice.id=choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click",SelectChoice);

        document.getElementById("choices").append(choice);


    }
}



function SelectChoice(){
    you = this.id;
    document.getElementById("your-choice").src = you + ".png";

    opponent = choices[Math.floor(Math.random * 3)];
    document.getElementById("opponent-choice").src = opponent + ".png";



    if (you == opponent){
        yourScore += 1;
        opponentScore +=1;

    }

    else{
        if(you  == "rock"){
            if (opponent == "scissor" ){
                yourScore += 1;
            }
            else if(opponent == "paper"){
                opponentScore += 1;
                
            }
        }

        else if(you=="scissor"){
            if (opponent=="paper"){
                opponentScore+=1;
            }
            else if(opponent="rock"){
                opponentScore+=1;
            }
        }

        else if(you=="paper"){
            if(opponentScore == "rock"){
                yourScore +=1;
            }

            else if(opponent=="scissor"){
                opponentScore+=1;
            }
        }

    }
    document.getElementById("your-score").innerText=yourScore;
    document.getElementById("opponent-score").innerText=opponent;



} 

