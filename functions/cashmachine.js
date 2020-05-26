let storedPin = 1775
let inputPin = 1885
let amount = 200
let balance = 300

const cashWithdrawal = (pin, balance) => {
    if
        (pin == 1775 && balance <= 300)
        console.log("You have suffeciant funds to withdraw");
    else
        console.log("You don't have suffeciant funds");  
}

cashWithdrawal(1775, 400)