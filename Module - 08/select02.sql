-- Active: 1747540978742@@127.0.0.1@5432@new_db
SELECT * FROM students;

SELECT * FROM students
    WHERE NOT country = 'India';


SELECT * FROM students
    WHERE email IS NULL;


SELECT * FROM students
    WHERE email IS NOT NULL;


SELECT COALESCE(age , 20) FROM students;


SELECT * FROM students
    WHERE age BETWEEN 21 AND 22;


SELECT * FROM students
    WHERE dob BETWEEN '2002-01-01' AND '2004-01-01';


SELECT * FROM students
    WHERE dob BETWEEN '2002-01-01' AND '2004-01-01' ORDER BY dob;


SELECT * FROM students
    WHERE first_name LIKE 'A%';


SELECT * FROM students
    WHERE first_name LIKE '__a%';


SELECT * FROM students
    WHERE first_name LIKE 'A_%_n%';


SELECT * FROM students
    WHERE first_name ILIKE 'a%';


SELECT * FROM students
    WHERE first_name ILIKE 'a_%_n%';




SELECT * FROM students LIMIT 5;

SELECT * FROM students LIMIT 5 OFFSET 5 * 0;
SELECT * FROM students LIMIT 5 OFFSET 5 * 1;
SELECT * FROM students LIMIT 5 OFFSET 5 * 2;
SELECT * FROM students LIMIT 5 OFFSET 5 * 3;



DELETE FROM students
    WHERE grade = 'C';

SELECT * FROM students;


