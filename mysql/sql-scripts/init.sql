CREATE DATABASE IF NOT EXISTS proxydb;
USE proxydb;
CREATE TABLE people (
id    int not null AUTO_INCREMENT,
name  varchar(255) NOT NULL,
PRIMARY KEY (id)
);
