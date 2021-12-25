const inquirer = require('inquirer')
const db = require('./db')
const figlet = require('figlet');
figlet('Employee Tracker!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
    init()
});
const colors = require('colors');
require('console.table')

const mainPromptsQuestions = require('./src/mainPrompts');
const { listenerCount } = require('./db/connection');


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
        console.table(roles);
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
    db.viewAllDepartment()
    .then(([rows])=>{
            let departments = rows;
            const departmentChoices = departments.map(({id, name})=>({
                name:name,
                value:id
            }));
    inquirer.prompt([{
        name:"department_id",
        type:"list",
        choices:departmentChoices,
        message:"By which department?"
    }])
        .then(answer=>{
            console.log(`Displaying all employee in the department.`.yellow);
            db.viewEmployeeByDepartment(answer).then(([rows])=>{
                let employees = rows;
                console.log('\n')
                console.table(employees)
            })
                
        })
        .then(()=>{
            loadMainPrompts()})

    })
};

function viewEmployeeByRole(){
    db.viewAllRole()
    .then(([rows])=>{
            let roles = rows;
            const roleChoices = roles.map(({id, title})=>({
                name:title,
                value:id
            }));
    inquirer.prompt([{
        name:"role",
        type:"list",
        choices:roleChoices,
        message:"By which role?"
    }])
        .then(answer=>{
            console.log(`Displaying all employee with that role.`.yellow);
            db.viewEmployeeByRole(answer).then(([rows])=>{
                let employees = rows;
                console.log('\n')
                console.table(employees)
            })      
        })
    })
    .then(()=>{
        loadMainPrompts()})
};

function updateEmployeeRole(){
    db.viewAllEmployee()
    .then(([rows])=>{
            let employees = rows;
            const employeeChoices = employees.map(({id, last_name})=>({
                name:last_name,
                value:id
            }));
            const roleChoices = employees.map(({role_id, id})=>({
                name:role_id,
                value:id
            }));
    inquirer.prompt([
        {
        name:"last_name",
        type:"list",
        choices: employeeChoices,
        message:"Which employee would you like to update?"
        },
        {
        name:"roles",
        type:"list",
        choices: roleChoices,
        message:"what is the new role?"
    }])
    .then(answer=>{db.updateRole(answer)})
.then(console.log(`Employee Role has been updated`))
})

.then(()=>{
    loadMainPrompts()})

}




// function to add a department
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

// function to add a role
function addRole(){
    db.viewAllDepartment()
    .then(([rows])=>{
            let departments = rows;
            const departmentChoices = departments.map(({id, name})=>({
                name:name,
                value:id
            }));
      inquirer.prompt([
            {
                name: "title",
                type: "input",
                message: "What is the title for the new role?",
                validate: (value) => {
                    if (value) {
                        return true;
                    } else {
                        console.log("Please enter the title.");
                    }
                }
            },
            {
                name: "salary",
                type: "input",
                message: "What is this new role's salary",
                validate: (value) => {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    console.log("Please enter a number");
                }
            },
            {
                name: "department",
                type: "list",
                choices: departmentChoices,
                message: "What department is this new role under?",
            }
        ]).then(answer => {
            
           db.addRole(answer)
           console.log(`New role ${answer.title} has been added!`);
           loadMainPrompts();
        });
    })
}

// function to add a role
function addEmployee(){
    db.viewAllRole()
    .then(([rows])=>{
            let Roles = rows;
            const roleChoices = Roles.map(({id, title})=>({
                name:title,
                value:id
            }));
      inquirer.prompt([
            {
                name: "first_name",
                type: "input",
                message: "What is the first name of this employee",
                validate: (value) => {
                    if (value) {
                        return true;
                    } else {
                        console.log("Please enter first name.");
                    }
                }
            },
            {
                name: "last_name",
                type: "input",
                message: "What is the last name of this employee",
                validate: (value) => {
                    if (value) {
                        return true;
                    } else {
                        console.log("Please enter last name.");
                    }
                }
            },

            {
                name: "role",
                type: "list",
                choices: roleChoices,
                message: "What department is this new role under?",
            }
        ]).then(answer => {
            
           db.addEmployee(answer)
           console.log(`New role ${answer.first_name} has been added!`.bgGreen);
           loadMainPrompts();
        });
    })
}