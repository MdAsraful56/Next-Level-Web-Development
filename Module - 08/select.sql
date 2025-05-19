-- Active: 1747540978742@@127.0.0.1@5432@new_db
CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    age INT,
    grade CHAR(2),
    course VARCHAR(100),
    email VARCHAR(50),
    dob DATE,
    blood_group VARCHAR(50),
    country VARCHAR(50)
)

SELECT * FROM students

alter Table students
    alter COLUMN first_name set NOT NULL;

ALTER TABLE students 
    alter COLUMN last_name set NOT NULL;


INSERT INTO students (first_name, last_name, age, grade, course, email, dob, blood_group, country) 
VALUES 
    ('Ayaan', 'Khan', 22, 'B', 'CSE', 'ayaan.khan@gmail.com', '2003-04-15', 'A+', 'India'),
    ('Rahim', 'Uddin', 23, 'B', 'Math', 'rahim.uddin@gmail.com', '2002-11-10', 'B+', 'Bangladesh'),
    ('James', 'Smith', 24, 'A', 'Physics', 'james.smith@gmail.com', '2001-05-12', 'O-', 'USA'),
    ('Imran', 'Ali', 21, 'A', 'CSE', 'imran.ali@gmail.com', '2004-02-18', 'AB+', 'Pakistan'),
    ('Kabir', 'Rahman', 25, 'C', 'English', 'kabir.rahman@gmail.com', '2000-06-22', 'O+', 'Bangladesh'),
    ('Ethan', 'Brown', 20, 'B', 'Biology', 'ethan.brown@gmail.com', '2005-03-30', 'A-', 'UK'),
    ('Rifat', 'Hossain', 22, 'A', 'IT', 'rifat.hossain@gmail.com', '2003-07-09', 'B-', 'Bangladesh'),
    ('Noah', 'Walker', 23, 'B', 'History', 'noah.walker@gmail.com', '2002-08-01', 'O+', 'Canada'),
    ('Adnan', 'Kazi', 21, 'A', 'Math', 'adnan.kazi@gmail.com', '2004-01-05', 'AB-', 'India'),
    ('Zidan', 'Ahmed', 24, 'A', 'Engineering', 'zidan.ahmed@gmail.com', '2001-09-14', 'B+', 'Bangladesh'),
    ('Aisha', 'Begum', 22, 'A', 'CSE', 'aisha.begum@gmail.com', '2003-02-20', 'O+', 'Bangladesh'),
    ('Emma', 'Watson', 24, 'A', 'Physics', 'emma.watson@gmail.com', '2001-04-15', 'A-', 'UK'),
    ('Mehjabin', 'Chowdhury', 23, 'B', 'English', 'mehjabin.c@gmail.com', '2002-12-01', 'B+', 'Bangladesh'),
    ('Sadia', 'Haque', 25, 'C', 'Biology', 'sadia.haque@gmail.com', '2000-05-25', 'A+', 'Bangladesh'),
    ('Lamia', 'Islam', 20, 'A', 'Math', 'lamia.islam@gmail.com', '2005-06-06', 'O-', 'Bangladesh'),
    ('Sophia', 'Taylor', 21, 'B', 'History', 'sophia.taylor@gmail.com', '2004-09-03', 'B-', 'USA'),
    ('Nadia', 'Rahman', 22, 'A', 'IT', 'nadia.rahman@gmail.com', '2003-08-10', 'AB+', 'India'),
    ('Olivia', 'Jones', 23, 'B', 'CSE', 'olivia.jones@gmail.com', '2002-01-30', 'A-', 'Canada'),
    ('Jannat', 'Akter', 21, 'A', 'English', 'jannat.akter@gmail.com', '2004-11-11', 'B+', 'Bangladesh'),
    ('Zara', 'Khan', 24, 'A', 'Math', 'zara.khan@gmail.com', '2001-10-20', 'O+', 'India');


SELECT * FROM students;

SELECT email, age, grade FROM students;

SELECT dob as "Date Of Birth" FROM students;

SELECT * FROM students ORDER BY age DESC;
SELECT * FROM students ORDER BY age ASC;
SELECT * FROM students WHERE age > 22;


SELECT DISTINCT country FROM students ORDER BY country ASC;

SELECT DISTINCT blood_group FROM students ORDER BY blood_group ASC;
SELECT * FROM students WHERE country = 'Bangladesh' AND age > 22;

SELECT * FROM students WHERE country = 'Bangladesh' OR country = 'India';
SELECT * FROM students WHERE (country IN ('Bangladesh', 'India')) AND age = 23;

SELECT * FROM students WHERE (grade = 'A' OR grade = 'B') AND (course = 'Math' OR course = 'Physics');

