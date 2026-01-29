CREATE DATABASE Users;
USE Users

CREATE TABLE IF NOT EXISTS User (
  Id int NOT NULL AUTO_INCREMENT,
  FirstName varchar(100) NOT NULL,
  LastName varchar(100) NOT NULL,
  Birthday date,
  Email varchar(318),

  PRIMARY KEY (Id)
);

INSERT INTO User (FirstName, LastName, Birthday, Email)
VALUES
("Ildar", "Popov", "2004-09-19", "sackharockfervent@gmail.com"),
("Ivan", "Sidorov", "2006-07-08", "ivansidorov@yandex.ru"),
("Elizaveta", "Petrova", "2001-01-12", "lizaPeto@mail.ru");
