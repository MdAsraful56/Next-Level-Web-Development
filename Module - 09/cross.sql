-- Active: 1747540978742@@127.0.0.1@5432@new_db

CREATE TABLE employee (
    emp_id INT,
    emp_name VARCHAR(25) NOT NULL,
    dept_id INT
);

CREATE TABLE department (
    dept_id INT,
    dept_name VARCHAR(25) NOT NULL
);



INSERT INTO employee (emp_id, emp_name, dept_id) VALUES 
(1, 'John Doe', 1),
(2, 'Jane Smith', 2)

INSERT INTO department (dept_id, dept_name) VALUES 
(1, 'HR'),
(2, 'Finance'),
(3, 'IT');




SELECT * FROM employee
    CROSS JOIN department;



SELECT * FROM employee
    NATURAL JOIN department;


