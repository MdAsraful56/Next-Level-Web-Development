-- Active: 1747540978742@@127.0.0.1@5432@new_db

SELECT * FROM totalusers;

CREATE TABLE deleted_users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM deleted_users;


CREATE OR REPLACE FUNCTION save_deleted_user()
RETURNS TRIGGER
LANGUAGE plpgsql
AS
$$
    BEGIN
        INSERT INTO deleted_users (name, email) VALUES (OLD.username, OLD.email);
        RAISE NOTICE 'User % deleted', OLD.username;
        RETURN OLD;
    END;
$$;  



CREATE TRIGGER save_deleted_user
BEFORE DELETE
ON totalusers
FOR EACH ROW
EXECUTE FUNCTION save_deleted_user();



DELETE FROM totalusers
    WHERE id = 1;

