-- Active: 1747540978742@@127.0.0.1@5432@new_db

SELECT * FROM students;


UPDATE students
    SET grade = 'A+'
    WHERE student_id = 1;


UPDATE students
    SET grade = 'A+', age = 12, dob = '2012-01-01'
    WHERE student_id = 1;