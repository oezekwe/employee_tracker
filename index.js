const fs = require('fs');
const inquirer= require('inquirer');
const mysql = require('mysql2');
const departments= require('./info/department');
const roles= require('./info/role');
const employees= require('./info/employee');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'seQ&w3bY',
    database: 'officedb'
});


const question= [
    {
        type: 'list',
        name: 'options',
        message: "What would you like to do?",
        choices: ['View departments', 'View roles', 'View employees', 
        'Add department', 'Add role', 'Add employee', 'Update employee\'s role', 'End program']
    } 
];

function applicationQ(){
    inquirer.prompt(question)
    .then(answer=>{
        switch(answer){
            case('View departments'):
                departments.viewItems;
                applicationQ();
                break;
            case('View roles'):
                roles.viewItems;
                applicationQ();
                break;
            case('View employees'):
                employees.viewItems
                applicationQ();
                break;
            case('Add department'):
                departments.viewItems;
                applicationQ();
                break;
            case('Add roles'):
                roles.addItem;
                applicationQ();
                break;
            case('Add employees'):
                employees.addItem;
                applicationQ();
                break;
            case('Update employee\'s role'):
                employees.changeItem;
                applicationQ();
                break;
            default:
                return;
        }
    });
}

applicationQ();

module.exports= connection;
