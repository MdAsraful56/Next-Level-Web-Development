-- Active: 1747540978742@@127.0.0.1@5432@new_db

SHOW timezone;

SELECT now();


CREATE TABLE timeZ (ts TIMESTAMP without time zone, tsz TIMESTAMP with time zone);

INSERT INTO timeZ (ts, tsz) VALUES (now(), now());

SELECT * FROM timeZ;




SELECT now();

SELECT CURRENT_DATE;

SELECT now():: date;
SELECT now():: time;


SELECT to_char(now(), 'YYYY-MM-DD HH24:MI:SS');
SELECT to_char(now(), 'YYYY-MM-DD HH24:MI:SS.MS');
SELECT to_char(now(), 'YYYY');
SELECT to_char(now(), 'YYYY-MM-DD');

SELECT to_char(now(), 'DDD');

SELECT CURRENT_DATE - INTERVAL '1 year';


SELECT *, age (CURRENT_DATE, dob) FROM students;



