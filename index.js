const fs = require('fs');
const connection= require('./info/connection');
const inquirer= require('inquirer');
const mysql = require('mysql2');
/*const departments= require('./info/department');
const roles= require('./info/role');
const employees= require('./info/employee');*/

const question= [
    {
        type: 'list',
        name: 'options',
        message: "What would you like to do?",
        choices: ['View departments', 'View roles', 'View employees', 
        'Add department', 'Add role', 'Add employee', 'Update employee\'s role', 'End program']
    } 
];

connection.connect(
    function(err, res){
        if(err) throw err;
        console.log('database');
        applicationQ();
    }
);

function viewItems(changeG){
    if(changeG.includes("departments")){
        connection.query(
            'SELECT * FROM department',
            
            function(err, res){
                if(err) throw err;
                console.table(res);
                console.log("done");
            }
        );
    }
    else if(changeG.includes("roles")){
        connection.query(
            'SELECT role.id, role.title, role.salary, department.name FROM role LEFT JOIN department ON department.id=role.department_id',
            
            function(err, res){
                if(err) throw err;
                console.table(res);
            }
        )
    }
    else{
        connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, department.name AS department, role.salary, role.title AS position, CONCAT(worker.first_name, ' ' ,worker.last_name) AS Manager FROM employee INNER JOIN role ON role.id=employee.role_id INNER JOIN department ON department.id=role.department_id LEFT JOIN employee worker ON worker.id=employee.manager_id",
            
            function(err, res){
                if(err) throw err;
                console.table(res);
                console.log('\n\n');
            }
        )
    }
    applicationQ();
}

function addItem(){

}

function applicationQ(){
    inquirer.prompt(question)
    .then(answer=>{
        var ansStr= answer.options;
        if(ansStr.includes("View")){
            viewItems(ansStr);
        }
        else if(ansStr.includes("Add")){
            addItem(ansStr);
        }
        else if(ansStr.includes("Update")){
            changeItem();
        }
        else{
            process.exit();
        }
        /*switch(answer.options){
            case('View departments'):
                viewItems(ansStr);
                break;
            case('View roles'):
                viewItems(2);
                break;
            case('View employees'):
                viewItems(3);
                break;
            case('Add department'):
                addItem(1);
                break;
            case('Add roles'):
                addItem(2);
                break;
            case('Add employees'):
                addItem(3);
                break;
            case('Update employee\'s role'):
                changeItem();
                break;
            default:
                process.exit();
        }*/
    })
}
