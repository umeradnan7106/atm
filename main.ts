#! /usr/bin/env node 

import inquirer from "inquirer"

let myBalance = 10000;   // Dollar 
let myPinNumber = 554321;

console.log(`Your current bank balance is : ${myBalance}`);

let pinAnwer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your pin number:",
            type: "number",
        }
    ]
)
// console.log(pinAnwer.pin);
// console.log(pinAnwer);



if(pinAnwer.pin === myPinNumber){
    console.log("You put the correct pin number:");
    
    let list = await inquirer.prompt(
    [
        {
            name: "operation",
            message: "select the operation?",
            type: "list",
            choices:["Withdraw", "Check balance", "Fast transaction"]   
        },
    ]
)

    if (list.operation === "Withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter your amount: ",
                    type: "number",
                }
            ]
        )
        myBalance -= amountAns.amount;
        // console.log(myBalance - amountAns.amount);
        console.log("Your remaining balance is:" + myBalance);
    }
    else if ( list.operation === "Check balance"){
        console.log(`Your bank balance is : ${myBalance}`);
    }
    else if (list.operation === "Fast transaction"){
        let fastAmount = await inquirer.prompt(
            [
                {
                    name: "fAmount",
                    message: "Which amount you choose?",
                    type: "list",
                    choices: [500, 1000, 5000, 10000]
                }
            ]
        )
        if (fastAmount.fAmount === 500){
        myBalance -= 500;
        console.log(`Your remaining balance is: ${myBalance}`);
        }
        else if (fastAmount.fAmount === 1000){
        myBalance -= 1000;
        console.log(`Your remaining balance is: ${myBalance}`);
        }
        else if (fastAmount.fAmount === 5000){
        myBalance -= 5000;
        console.log(`Your remaining balance is: ${myBalance}`);
        }
        else if (fastAmount.fAmount === 10000){
        myBalance -= 10000;
        console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
}
else{
    console.log("You put the wrong pin number, incorrect password!");
}

