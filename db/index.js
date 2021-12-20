const connection = require('./connection');
class DB{
    // keeping a reference to the connection on the class
    constructor(connection){
        this.connection=connection;
    };
    // view all department from department table
    viewAllDepartment(){
        return this.connection.promise().query(
            `SELECT id, name FROM department`
        );
    }
    // view all roles from role table
    viewAllRole(){
        return this.connection.promise().query(
            `SELECT * FROM role`
        )
    }
    //view all employees from employee table
    viewAllEmployee(){
        return this.connection.promise().query(
            `SELECT * FROM employee`
        )
    }
    viewAllEmployeeByDepartment (){
        return this.connection.promise().query(
            `SELECT `
        )
    }
}
module.exports = new DB(connection);