-- Active: 1747540978742@@127.0.0.1@5432@new_db


SELECT department_name, AVG(salary) FROM employees
    JOIN departments USING(department_id)
    GROUP BY department_name;



CREATE VIEW department_avg_salaries AS
SELECT department_name, AVG(salary) FROM employees
    JOIN departments USING(department_id)
    GROUP BY department_name;


SELECT * FROM department_avg_salaries;













