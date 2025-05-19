-- Active: 1747540978742@@127.0.0.1@5432@new_db
SELECT * FROM totalusers;

-- add new column 
ALTER TABLE totalusers 
    ADD COLUMN gender VARCHAR(20) DEFAULT 'male';


--delete column 

ALTER TABLE totalusers
    DROP COLUMN gender;


ALTER TABLE totalusers
    RENAME COLUMN name to userName;


ALTER TABLE totalusers
    alter COLUMN email type VARCHAR(100);



ALTER Table totalusers 
    Alter COLUMN age set NOT NULL;


ALTER TABLE totalusers
    alter COLUMN age DROP NOT NULL;



ALTER TABLE totalusers
    ADD constraint unique_totalusers_email UNIQUE(email);


ALTER TABLE totalusers 
    DROP constraint unique_totalusers_email;



