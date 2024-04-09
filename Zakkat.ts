import inquirer from "inquirer"

let zakkat : number = 2.5;
let goldvalueInTola = 234800;
let goldWeightInTolaReq = 2;

const answer = await inquirer.prompt([
    {
        name: "goldWeight",
        message: "Enter gold Weight",
        type: "number"
    }
]);

let goldWeight = answer.goldWeight;

if(goldWeight >= goldWeightInTolaReq){
   let calculatedzakkat = (goldWeight * goldvalueInTola) *(zakkat/100)
   console.log(`The Calculated value of weighing ${goldWeight} total is ${calculatedzakkat}`);
}else{
    console.log("Zakkat not applicable");
}