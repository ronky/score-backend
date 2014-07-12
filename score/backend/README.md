# score-backend
### a Sails application

    npm install -g sails
    npm install sails-mysql
    sails lift

[http://localhost:1337](http://localhost:1337)

### Local mysql DB
* create database and user:

    CREATE DATABASE `scores` COLLATE 'utf8_general_ci';
    CREATE USER 'scores'@'localhost' IDENTIFIED BY 'scores';
    GRANT USAGE ON *.* TO 'scores'@'localhost';
    GRANT SELECT, EXECUTE, SHOW VIEW, ALTER, ALTER ROUTINE, CREATE, CREATE ROUTINE, CREATE TEMPORARY TABLES, CREATE VIEW, DELETE, DROP, EVENT, INDEX, INSERT, REFERENCES, TRIGGER, UPDATE, LOCK TABLES  ON `scores`.* TO 'scores'@'localhost' WITH GRANT OPTION;
    FLUSH PRIVILEGES;