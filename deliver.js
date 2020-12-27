var age;
var age=confirm("You Are +18 ?");
if (age){
answeryes();
}
   
while(!age){

    if(!age){
    
        alert("You Are Not Able");
        var age=confirm("You Are +18 ?");
        if(age){
            answeryes();
        }
       
    
    }
    

}
  






function answeryes(){
    var numberofdelivery=prompt("how many burger you want delivery? max number 5");
var intnumberDelivery=parseInt(numberofdelivery,10);
    if (intnumberDelivery > 0 && intnumberDelivery<=5){
        loopingimage(intnumberDelivery);
        

}if (intnumberDelivery>5 || intnumberDelivery<0)
{
    alert("You Inpute Wrong Number Please Reload The Page And Try Again");
    answeryes();
}


}
function loopingimage(numberofdelivered){
    
    
    for(var x=1;x<=numberofdelivered;x++){
        document.write("<p style=\"display:block;\">"+x+"</p>");

document.write("<img style=\"display:block;width: 120px; height: 100px;\" src=\"https://elements.evonik.com/wp-content/uploads/2019/11/burger-fb.jpg\"");

    }
}

function confirmation(){
    var age=confirm("You Are +18 ?");

}



