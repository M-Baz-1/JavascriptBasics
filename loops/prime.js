const calprime = (num)=>{
    let numSquareroot = Math.sqrt(num);
    if (num < 2 || num != Math.round(num)) {
        return false
    } else if (num == 2) {
        return true
    }
    let prime = true;
for (let i = 2; i <=numSquareroot; i++){
    if (num % i == 0) {
        prime = false;
    }
}

return prime;
    
}
//console.log(calprime(5));

for (let i = 0; i <=20; i++) {
    if (calprime(i)) {
        console.log(`The num ${i} is prime`)
    } else {
        console.log(`The num ${i} is not prime`)
        
    }
    
}