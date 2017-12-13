DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

-- Need to use 0 for false as BOOLEAN is just a synonym for TINYINT here.
CREATE TABLE burgers(
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);