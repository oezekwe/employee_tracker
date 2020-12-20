const fs = require('fs');
const connection= require('./connection');
const inquirer= require('inquirer');
const mysql = require('mysql2');

const questions= [
    {
        type: 'input',
        name: 'departN',
        message: "Enter name of department:"
    } 
];

function addItem(){
    inquirer.prompt(questions)
        .then(answer=>{
            connection.query(
                'INSERT INTO department SET ?',
                {name: answer.departN},
                function(err, res){
                    if(err) throw err;
                    console.log("Added new department");
                }
            );
        });   
}

function viewItems(cb){
    console.log("try to display departments");

    connection.query(
        'SELECT * FROM department',
        
        function(err, res){
            if(err) throw err;
            console.log("\n");
            console.table(res);
        }
    );
    cb;
}
