-- Active: 1747540978742@@127.0.0.1@5432@new_db

SELECT * FROM students;

SELECT country FROM students
    GROUP BY country;


SELECT country, COUNT(*) FROM students
    GROUP BY country;


SELECT country, COUNT(*), AVG(age) FROM students
    GROUP BY country;

SELECT country, COUNT(*), AVG(age) FROM students
    GROUP BY country
    HAVING AVG(age) > 20;


SELECT extract(year FROM dob) AS year_of_birth, COUNT(*) FROM students
    GROUP BY year_of_birth
    ORDER BY year_of_birth DESC;


