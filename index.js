/*var round=0

while(round<=5){
  hconverter() 
  cconverter()
  round++

     
}

*/


function hconverter(){

let answer = parseInt(prompt("Pick [1] Rock [2] Papper [3]Scissors"))


if (answer>3 || answer<=0){
  
    answer="Error"


}else{
    
    

}


if (answer==1){
    console.log("Rock")
}
else if(answer==2){
    console.log("paper")
}
else if(answer==3){
    console.log("scissors")
}

  return answer
 
}








function cconverter(){

    let ran =Math.floor(Math.random()*3)+1;

    if (ran==1){
        console.log("rock")
    }
    else if(ran==2){
        console.log("paper")
    }
    else if(ran==3){
        console.log("scissors")
    }
       return ran
    }
    
 




  function valuator(){
    hconverter()
    cconverter()
     
      console.log(answer)
      
  }
 
  valuator()