const inquirer = require('inquirer')
const db = require('./db')
require('console.table')

const mainPromptsQuestions = require('./src/mainPrompts')
init()

//display welcome text and load main prompts
function init(){
    console.log('Welcome to Employee Tracker!');
    loadMainPrompts()
}

//main prompt
function loadMainPrompts(){
    inquirer.prompt(mainPromptsQuestions)
    .then(res=>{
        let choice = res.choice;
        switch(choice){
            case "VIEW_DEPARTMENT":
                viewDepartment();
                break;  
            case 'VIEW_ROLE':
                viewRole();
                break;
            case 'VIEW_EMPLOYEE':
                viewEmployee();
                break;
            case 'VIEW_EMPLOYEE_BY_DEPARTMENT':
                viewEmployeeByDepartment();
                break;
            case 'VIEW_EMPLOYEE_BY_ROLE':
                viewEmployeeByRole();
                break;
            case 'ADD_DEPARTMENT':
                addDepartment();
                break;
            case 'ADD_ROLE':
                addRole();
                break;
            case 'ADD_EMPLOYEE':
                addEmployee();
                break;
            case 'UPDATE_EMPLOYEE':
                updateEmployee();
                break;
            case 'QUIT':
                quit ();
        }
    })
}
function viewDepartment(){
    db.viewAllDepartment()
    .then(([rows])=>{
        let departments = rows;
        console.log('\n');
        console.table(departments);
    })
    .then(()=>{loadMainPrompts()})
}
