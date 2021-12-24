module.exports=[
    {
        type:'list',
        name:'choice',
        message:'What would you like to do?'.green,
        choices: [
            {
            name:'View all departments',
            value:'VIEW_DEPARTMENT'
            },
            {
                name:'View All roles',
                value:'VIEW_ROLE'
            },
            {
            name:'View all employee',
            value:'VIEW_EMPLOYEE'
            },
            {
                name:'View utilized budget by department',
                value:"VIEW_BUDGET_BY_DEPARTMENT"
            },
            {
                name:'View employees by department',
                value:'VIEW_EMPLOYEE_BY_DEPARTMENT'
            },
            {
                name:'View employees by role',
                value:'VIEW_EMPLOYEE_BY_ROLE'
            },
            {
                name:'Add a department',
                value:'ADD_DEPARTMENT'
            },
            {
                name:'Add a role',
                value: 'ADD_ROLE'
            },
            {
                name:'Add an employee',
                value:'ADD_EMPLOYEE'
            },
            {
                name:'Update an employee role',
                value:'UPDATE_EMPLOYEE_ROLE'
            },
            {
                name:'Update an employee manager',
                value:'UPDATE_EMPLOYEE_MANAGER'
            },
            {
                name:'Delete a department',
                value:'DELETE_DEPARTMENT'
            },
            {
                name:'Delete a role',
                value:'DELETE_ROLE'
            },
            {
                name:'Delete an employee',
                value:'DELETE_EMPLOYEE'
            },

            {
                name:'Quit',
                value:'QUIT'
            }

        ]
    }
]