
let hcounter=0
let ccounter=0




let counter=1

while (counter<=5){
    console.log("---------------------------------")
    console.log("Round Number: "+counter)
    console.log("---------------------------------")
    RPS()
    counter++
}

if (counter = 5){
    console.log("---------------------------------")
    console.log("results")
    console.log("---------------------------------")
    console.log("Final Human Score: "+hcounter)
    console.log("Final Computer Score: "+ccounter)
    final()
}


function RPS(){


let answer = parseInt(prompt("Pick [1] Rock [2] Papper [3]Scissors   |Do Not put anything other than 1 2 or 3 it wont be counted"))

let ran =Math.floor(Math.random()*3)+1;

function Val(){
     
    if (answer==ran){
         console.log("Its a Tie")
    }else if (answer==1 && ran==3){
        hcounter++
       console.log("You Win!! :)")
    }else if (ran==1 && answer==3){
        ccounter++
    console.log("You Lose D:")
    }else if (answer==2 && ran==1){
        hcounter++
        console.log("You Win!! :)")
    }else if (ran==2 && answer==1){
        ccounter++
        console.log("You Lose D:")
    }else if(answer==3 && ran==2){
        hcounter++
        console.log("You Win!! :)")
    }else if(ran==3 && answe==2){
        ccounter++
        console.log("You Lose D:")
    }
}



     







function hconverter(){




if (answer>3 || answer<=0){
  
    answer="Error"


}else{
    
    

}


if (answer==1){
    console.log("You Picked Rock")
}
else if(answer==2){
    console.log("You Picked Paper")
}
else if(answer==3){
    console.log("You Picked Scissors")
}

  return answer
 
}








function cconverter(){

   

    if (ran==1){
        console.log("The Computer Picked Rock")
    }
    else if(ran==2){
        console.log("The Computer Picked Paper")
    }
    else if(ran==3){
        console.log("The Computer Picked Scissors")
    }
       return ran
    }
    
 





   function Val(){
     
    if (answer==ran){
         console.log("Its a Tie")
    }else if (answer==1 && ran==3){
        hcounter++
       console.log("You Win!! :) Rock Beats Scissors")
    }else if (ran==1 && answer==3){
        ccounter++
    console.log("You Lose D: Rock Beats Scissors")
    }else if (answer==2 && ran==1){
        hcounter++
        console.log("You Win!! :) Paper Beats Rock")
    }else if (ran==2 && answer==1){
        ccounter++
        console.log("You Lose D: Paper Beats Rock")
    }else if(answer==3 && ran==2){
        hcounter++
        console.log("You Win!! :) Scissors Beats Paper")
    }else if(ran==3 && answer==2){
        ccounter++
        console.log("You Lose D: Scissors Beats Paper")
    }
}
  
  Val()
  console.log("This is human score: "+hcounter)
  console.log("this is computer score: "+ccounter)
  hconverter()
  cconverter()





}



/*while (counter==3){
    if (hcounter>ccounter){
        console.log("You Won The Game :DDDDDD")
     } else if(ccounter>hcounter){
       console.log("You Lose Try Again !!!")
     }else if(hcounter == ccounter){
   
       console.log("Wow No way Its an actuall Tie")
     }
   
}*/

function final(){
if (hcounter>ccounter){
    console.log("You Won The Game :DDDDDD")
 } else if(ccounter>hcounter){
   console.log("You Lose Try Again !!!")
 }else if(hcounter == ccounter){

   console.log("Wow No way Its an actually a Tie")
 }
}