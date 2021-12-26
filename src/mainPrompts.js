module.exports=[
    {
        type:'list',
        name:'choice',
        message:'What would you like to do?'.green,
        choices: [
            {
            name:'View all departments'.blue,
            value:'VIEW_DEPARTMENT'
            },
            {
                name:'View All roles',
                value:'VIEW_ROLE'
            },
            {
            name:'View all employee'.yellow,
            value:'VIEW_EMPLOYEE'
            },
            {
                name:'View employees by department',
                value:'VIEW_EMPLOYEE_BY_DEPARTMENT'
            },
            {
                name:'View employees by role'.yellow,
                value:'VIEW_EMPLOYEE_BY_ROLE'
            },
            {
                name:'Add a department'.blue,
                value:'ADD_DEPARTMENT'
            },
            {
                name:'Add a role'.red,
                value: 'ADD_ROLE'
            },
            {
                name:'Add an employee'.rainbow,
                value:'ADD_EMPLOYEE'
            },
            {
                name:'Update an employee role'.yellow,
                value:'UPDATE_EMPLOYEE_ROLE'
            },
            {
                name:'Delete a department'.cyan,
                value:'DELETE_DEPARTMENT'
            },
            {
                name:'Delete a role'.grey,
                value:'DELETE_ROLE'
            },
            {
                name:'Delete an employee'.rainbow,
                value:'DELETE_EMPLOYEE'
            },

            {
                name:'Quit',
                value:'QUIT'
            }

        ]
    }
]