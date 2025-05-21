-- Active: 1747540978742@@127.0.0.1@5432@new_db


CREATE TABLE studentsPT (
    id SERIAL PRIMARY KEY,
    roll INT UNIQUE NOT NULL,
    name VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    department VARCHAR(50) NOT NULL,
    score INT NOT NULL,
    status VARCHAR(10) NOT NULL,
    last_login DATE DEFAULT CURRENT_DATE
)

SELECT * FROM studentsPT;

--task - 01
ALTER TABLE studentsPT
    ADD COLUMN email VARCHAR(50) UNIQUE NOT NULL;

--task - 02
ALTER TABLE studentsPT
    RENAME COLUMN  email to student_email;


--task - 03
ALTER TABLE studentsPT
    ADD constraint unique_student_email UNIQUE(student_email);


--task - 04
CREATE TABLE couresPT (
    id SERIAL PRIMARY KEY,
    course_name VARCHAR(50) NOT NULL
);

SELECT * FROM couresPT;

ALTER TABLE studentsPT
    ADD COLUMN course_id INT REFERENCES couresPT(id);


--task - 05
ALTER TABLE studentsPT
    DROP COLUMN age;

--task - 06

INSERT INTO couresPT (course_name) VALUES
('Introduction to Programming'),
('Data Structures'),
('Database Systems'),
('Computer Networks'),
('Digital Electronics'),
('Software Engineering'),
('Operating Systems'),
('Business Communication'),
('Electrical Circuits'),
('Artificial Intelligence');



INSERT INTO studentsPT (roll, name, department, score, status, last_login, student_email, course_id) VALUES
(201, 'Ayman Hossain', 'CSE', 88, 'active', '2025-05-20', 'ayman201@example.com', 1),
(202, 'Tania Akter', 'EEE', 74, 'inactive', '2025-05-15', 'tania202@example.com', 2),
(203, 'Nabil Chowdhury', 'BBA', 92, 'active', '2025-05-18', 'nabil203@example.com', 3),
(204, 'Rafiul Islam', 'CSE', 65, 'active', '2025-05-19', 'rafiul204@example.com', 4),
(205, 'Nusrat Jahan', 'ENG', 81, 'inactive', '2025-05-17', 'nusrat205@example.com', 5),
(206, 'Shakib Khan', 'EEE', 70, 'active', '2025-05-14', 'shakib206@example.com', 6),
(207, 'Fatima Noor', 'BBA', 78, 'inactive', '2025-05-13', 'fatima207@example.com', 7),
(208, 'Imran Hossain', 'ENG', 84, 'active', '2025-05-20', 'imran208@example.com', 8),
(209, 'Nadia Rahman', 'CSE', 91, 'active', '2025-05-21', 'nadia209@example.com', 9),
(210, 'Tanvir Ahmed', 'EEE', 60, 'inactive', '2025-05-10', 'tanvir210@example.com', 10),
(211, 'Rumana Hoque', 'BBA', 76, 'active', '2025-05-12', 'rumana211@example.com', 1),
(212, 'Sajid Hossain', 'CSE', 85, 'active', '2025-05-20', 'sajid212@example.com', 2),
(213, 'Mahin Uddin', 'ENG', 67, 'inactive', '2025-05-18', 'mahin213@example.com', 3),
(214, 'Priya Das', 'BBA', 89, 'active', '2025-05-19', 'priya214@example.com', 4),
(215, 'Arifur Rahman', 'EEE', 73, 'active', '2025-05-21', 'arifur215@example.com', 5);


SELECT * FROM studentsPT;

SELECT * FROM studentsPT 
    WHERE score > 80 ;


--task - 07

SELECT * FROM studentsPT
    WHERE department != 'CSE' AND department != 'EEE';


--task - 08

SELECT * FROM studentsPT
    WHERE name LIKE 'A%';

SELECT * FROM studentsPT
    WHERE name ILIKE 'a%';


--task - 09

SELECT * FROM studentsPT
    WHERE score BETWEEN 70 AND 90;


--task - 10
SELECT * FROM studentsPT
    WHERE roll IN (201, 202, 204, 205);


--task - 11
SELECT COUNT(*) FROM studentsPT
    GROUP BY department;


--task - 12

SELECT AVG(score) FROM studentsPT
    GROUP BY department;


--task - 13
SELECT MAX(score) FROM studentsPT
    GROUP BY department;

SELECT MIN(score) FROM studentsPT
    GROUP BY department;



--task - 14
SELECT * FROM studentsPT;

UPDATE studentsPT
    SET status = 'failed'
    WHERE score < 75;


DELETE FROM studentsPT
    WHERE last_login < '2025-05-15';


SELECT * FROM studentsPT LIMIT 5 OFFSET 5 * 0;
SELECT * FROM studentsPT LIMIT 5 OFFSET 5 * 1;
SELECT * FROM studentsPT LIMIT 5 OFFSET 5 * 2;
