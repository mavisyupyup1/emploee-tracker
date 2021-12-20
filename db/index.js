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
}


module.exports = new DB(connection);