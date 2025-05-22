-- Active: 1747540978742@@127.0.0.1@5432@new_db
SELECT MAX(salary) FROM employees
    JOIN departments USING (department_id)
    WHERE department_name = 'HR';



SELECT * FROM employees 
WHERE salary > (
    SELECT MAX(salary) FROM employees
        JOIN departments USING (department_id)
        WHERE department_name = 'HR'
);



SELECT * FROM departments;




