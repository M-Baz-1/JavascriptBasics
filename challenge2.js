let num = 15;

if(num%3==0 && num%5==0){
    console.log("The number is divisible by both 3 and 5");
}else if(num%3==0){
    console.log("The number is divisible 3");
}else if(num%5==0){
    console.log("The number is divislbe by 5");
}else{
    console.log("No this number is not divisble by either 3 or 5")
}