DROP DATABASE IF EXISTS officeDB;
CREATE DATABASE officeDB;
USE officeDB;

CREATE TABLE department(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(30) UNIQUE,
    PRIMARY KEY (id)
);

CREATE TABLE role(
	id INT NOT NULL AUTO_INCREMENT,
    department_id INT,
	title VARCHAR(30) UNIQUE,
    salary DECIMAL,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee(
	id INT NOT NULL AUTO_INCREMENT,
    role_id INT,
    manager_id INT,
	first_name VARCHAR(30),
    last_name VARCHAR(30),
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);