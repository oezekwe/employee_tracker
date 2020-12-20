INSERT INTO department(name)
	VALUES("Sales");
INSERT INTO role(title, salary, department_id)
	VALUES("Sales Lead", 100000, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id)
	VALUES("John", "Doe", 1, null);
    
INSERT INTO department(name)
	VALUES("Engineering");
INSERT INTO role(title, salary, department_id)
	VALUES("Software Engineer", 120000, 2);
INSERT INTO employee(first_name, last_name, role_id, manager_id)
	VALUES("Kevin", "Tupik", 2, null);
    
INSERT INTO role(title, salary, department_id)
	VALUES("Saleperson", 20000, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id)
	VALUES("Chris", "Levin", 1, 1);