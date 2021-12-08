CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  messageID INT(100) NOT NULL AUTO_INCREMENT,
  username VARCHAR(100) NOT NULL,
  body VARCHAR(1000),
  room VARCHAR(100) NOT NULL,
  CONSTRAINT id PRIMARY KEY (messageID)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

