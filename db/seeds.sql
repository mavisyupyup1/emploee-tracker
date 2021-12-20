INSERT INTO department (name) VALUES
('Sales'),
('Human Resources'),
('IT'),
('Marketing'),
('Finance');

INSERT INTO role(title, salary,department_id) VALUES
('Sales Associate',80000,1),
('Senior Sales Associate',120000,1),
('Accountant',100000,5),
('Chief Accountant',150000,5),
('HR officer',90000,2),
('Senior HR officer',120000,2),
('IT technitian',90000,3),
('Chief Infomation officer',150000,3),
('Marketing Associate',80000,4),
('Senior Marketing Associate',120000,4);

INSERT INTO employee (first_name,last_name,role_id)
VALUES ('Tom','Cat',1),
('Jerry','Mouse',2),
('Jack','Jackson',3),
('Jimmy','Choo',4),
('Andy','Martin',5),
('Mac','Beth',6),
('Charlotte','White',7),
('Minnie','Mouse',8),
('Mickey','Mouse',9),
('Jack','Ryan',10);