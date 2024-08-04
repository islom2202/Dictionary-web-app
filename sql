----------Create table
--users
CREATE TABLE users (
	id INT(11) NOT NULL AUTO_INCREMENT, 
    username VARCHAR(30) NOT NULL,
    pwd VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);
--comments
CREATE TABLE comments (
	id INT(11) NOT NULL AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    comment_text TEXT NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIME,
    users_id INT(11),
    FOREIGN KEY(users_id) REFERENCES users (id) ON DELETE SET NULL,
    PRIMARY KEY(id)
)

----------Insert data to table (we added new user to users table)
INSERT INTO users (username, pwd, email) VALUES ('Islomjon', 'dani123', 'islomihsan@gamil.com')


----------Update data in table (we changed username and password from users table)
UPDATE users SET username = 'islom', pwd = '123' WHERE id = 3

----------Delete data from (users) table
DELETE FROM users WHERE id = 3

----------Select data from (users) table
SELECT username FROM users WHERE id = 2
SELECT * FROM users WHERE id = 2 
