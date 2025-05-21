-- Active: 1747540978742@@127.0.0.1@5432@new_db

CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25) NOT NULL
)

CREATE TABLE post (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    user_id INTEGER REFERENCES "user"(id)
)

ALTER TABLE post 
    alter COLUMN user_id SET NOT NULL;

INSERT INTO "user" (name) VALUES 
('Rain'),
('Ashraful'),
('Sohel'),
('Saiful')

SELECT * FROM "user";

INSERT INTO post (title, user_id) VALUES 
('Hello Everyone', 1),
('Hello World', 4),
('Hello Bangladesh', 3),
('Hello Dhaka', 2),
('Hello Chittagong', 1),
('Hello Sylhet', 3),
('Hello Khulna', 4),
('Hello Barisal', 2)

SELECT * FROM post;


