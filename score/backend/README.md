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

### add score
* post: http://localhost:1337/score/checkedCreate
* header: Content-Type application/json
* body (raw JSON):


    {
      "playerId": 1,
        "playerName": "Ronky",
        "scoreType": "arcade",
        "score": 75643,
        "time": 544,
        "level": "1"
    }

### find top 10 scores
* get: http://localhost:1337/score/find


    {
      "where": {
        "score" : {
          "greaterThan": "0"
        }
      },
        "limit": "10",
        "sord": "score DESC"
    }
