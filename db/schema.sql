DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;
CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);
CREATE TABLE role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL ON UPDATE CASCADE
);
CREATE TABLE employee(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER,
    manager_id INTEGER,
    FOREIGN KEY(role_id) REFERENCES role(id)  ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE VIEW department_role AS SELECT name FROM department LEFT JOIN role ON department.id = role.department_id;

CREATE VIEW department_salary AS SELECT title, salary, department_id FROM role LEFT JOIN department ON department.id = role.department_id;

CREATE VIEW employee_role AS SELECT first_name, last_name, role_id, manager_id FROM employee JOIN role ON employee.role_id = role.id;