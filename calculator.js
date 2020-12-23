var triger=confirm("do you want use a calculator?");
if(triger){
var input1 = prompt("Number 1","0");
var input2=prompt("Number 2","0");
var operator=prompt("operator + - / *",);


var num1=parseFloat(input1);
var num2=parseFloat(input2);
console.log(num1);


if(operator=="+"){

    var num3=num1+num2;
   
   
   alert(num3);


}if (operator=="-") {
    var num3=num1-num2;
   
   
   alert(num3);
} if (operator=="*") {
    var num3=num1*num2;
   
   
   alert(num3);
} if (operator=="/") {
    var num3=num1/num2;
   
   
   alert(num3);
} if(!operator=="*"|"-"|"/"|"*") {alert("Choose Correct Operator:Reload the page to try again");}
else{}

} else{}

