#! /usr/bin/env node
import inquirer from "inquirer"
console.log("\nWelcome to Quiz Questions.\n")
console.log("This Quiz contains 50 Marks.\n")

let marks=0

let userAnswer=await inquirer.prompt([
    {
    type:"list",
    name : "Question1",
    message:"what is typescript?\n",
    choices:["A superset of JavaScript",
         "A framework for building web applications",
         "A version control system",
         "A programming language for data analysis"
        ]},
        {
        type:"list",
        name : "Question2",
        message:"Which keyword is used to declare a constant variable in TypeScript?\n",
        choices:["const", "let","var","readonly"],
        },
        {
            type:"list",
            name : "Question3",
            message:"What is the file extension used for TypeScript files?\n",
            choices: [".js",".ts",".css",".html"] 
        },
        {
            type:"list",
            name : "Question4",
            message:"Which command is used to compile TypeScript code into JavaScript?\n",
            choices: ["tsc","ts","compile","js"] 
        },
        {
            type:"list",
            name : "Question5",
            message:"Which of the following TypeScript data types is used to represent a collection of similar type elements?\n",
            choices: ["array","string","number","boolean"] 
        },      
 ])

 const{Question1,Question2,Question3,Question4,Question5}=userAnswer;
 let correctAnswer=["A superset of JavaScript","const",".ts","tsc","array"]

 if(Question1 ==="A superset of JavaScript" )  (marks += 10)
 if(Question2 === "const") (marks += 10)
 if(Question3 === ".ts" ) marks += 10
 if(Question4 === "tsc") marks += 10
 if(Question5 === "array") marks += 10

let myAnswers=()=>{ console.log("\n correct Answers",correctAnswer)
  if (marks >= 50){
     console.log(`Congratulations you got ${marks} marks`)
  }
  else if(marks > 0){
     console.log(`you got ${marks} marks`)
    
  }
  else{`Unfortunatly your marks is ${marks} `}
 }

myAnswers()


