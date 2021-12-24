const inquirer = require('inquirer')
const db = require('./db')
var figlet = require('figlet');
figlet('Employee Tracker!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
    init()
});
var colors = require('colors');
require('console.table')

const mainPromptsQuestions = require('./src/mainPrompts')


//display welcome text and load main prompts
function init(){

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
            case 'VIEW_BUDGET_BY_DEPARTMENT':
                viewBudgetByDepartment();
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
            case 'UPDATE_EMPLOYEE_ROLE':
                updateEmployeeRole();
                break;
            case 'UPDATE_EMPLOYEE_MANAGER':
                updateEmployeeManager();
                break;
            case 'DELETE_DEPARTMENT':
                deleteDepartment();
                break;
            case 'DELETE_ROLE':
                deleteROLE();
                break;
            case 'DELETE_EMPLOYEE':
                deleteEmployee();
                break;
            case 'QUIT':
                db.end();
        }
    })
}
function viewDepartment(){
    db.viewAllDepartment()
    .then(([rows])=>{
        let departments = rows;
        console.log('\n');
        console.log('Displaying all departments');
        console.table(departments);
    })
    .then(()=>{loadMainPrompts()})
}
function viewRole(){
    db.viewAllRole()
    .then(([rows])=>{
        let roles =rows;
        console.log('\n');
        console.log('Displaying all roles');
        console.table(roles.yellow);
    })
    .then(()=>{loadMainPrompts()})
}
function viewEmployee(){
    db.viewAllEmployee()
    .then(([rows])=>{
        let employees = rows;
        console.log('\n');
        console.log('Displaying all employees');
        console.table(employees);
    })
    .then(()=>{
        loadMainPrompts()
    })
}
function viewEmployeeByDepartment(){
    inquirer.prompt
db.viewAllEmployeeByDepartment()
.then(([rows])=>{
    let employees = rows;
    console.log('\n')
    console.table(employees)
})
}

function viewEmployeeByRole(){

}
  // function to Add a department
function addDepartment(){
    inquirer.prompt([
        {
            name: "department",
            type: "input",
            message: "What is the new department name?",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    console.log("Please enter department name.");
                }
            }
        },
    ]).then(answer => {
        db.addDepartment(answer)
        .then(()=>{
            console.log(`New department ${answer.department} has been added!`.bgGreen);     
            loadMainPrompts()
        })  
})
}