-- Active: 1747540978742@@127.0.0.1@5432@new_db

CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25) NOT NULL
)

CREATE TABLE post (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    user_id INTEGER DEFAULT 0 REFERENCES "user"(id) ON DELETE SET DEFAULT 
)


INSERT INTO "user" (name) VALUES 
('Rain'),
('Ashraful'),
('Sohel'),
('Saiful')


INSERT INTO post (title, user_id) VALUES 
('Hello Everyone', 1),
('Hello World', 4),
('Hello Bangladesh', 3),
('Hello Dhaka', 2)


SELECT * FROM "user";
SELECT * FROM post;


SELECT title, name FROM post 
    JOIN "user" ON post.user_id = "user".id;


SELECT * FROM post 
    JOIN "user" ON post.user_id = "user".id;


INSERT INTO post (title, user_id) VALUES 
('Hello this is text ', NULL)


SELECT * FROM post 
    LEFT JOIN "user" ON post.user_id = "user".id;


SELECT * FROM post
    RIGHT JOIN "user" ON post.user_id = "user".id;


SELECT * FROM post 
    FULL JOIN "user" ON post.user_id = "user".id;