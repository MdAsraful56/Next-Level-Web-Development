-- Active: 1747540978742@@127.0.0.1@5432@new_db


SELECT * FROM employees;

SELECT COUNT(*) FROM employees;


CREATE FUNCTION get_employee_count() 
RETURNS INTEGER 
LANGUAGE SQL
AS 
$$
    SELECT COUNT(*) FROM employees;
$$


SELECT get_employee_count();


CREATE OR REPLACE FUNCTION deleted_employee_by_id(p_emp_id INTEGER) 
RETURNS void
LANGUAGE SQL
AS 
$$
    DELETE FROM employees WHERE employee_id = p_emp_id;
$$;


SELECT deleted_employee_by_id(30);




CREATE PROCEDURE deleted_employee()
LANGUAGE SQL
AS 
$$
    DECLARE
        p_emp_id INT; -- or use a more specific type like SMALLINT or
    BIGINT  
        SELECT employee_id INTO p_emp_id FROM employees
            WHERE employee_id = 29;
        DELETE FROM employees WHERE employee_id = p_emp_id;
    END;
$$;

CALL deleted_employee();


SELECT employee_id FROM employees
    WHERE employee_id = 29;






CREATE PROCEDURE deleted_employee()
LANGUAGE plpgsql
AS 
$$
DECLARE
    p_emp_id INT;
BEGIN
    SELECT employee_id INTO p_emp_id FROM employees
    WHERE employee_id = 29;

    DELETE FROM employees WHERE employee_id = p_emp_id;
END;
$$;

CALL deleted_employee();

SELECT * FROM employees;



