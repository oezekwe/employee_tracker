const fs = require('fs');
const connection= require('../index');
const inquirer= require('inquirer');
const mysql = require('mysql2');

connection.connect(err => {
    if (err) throw err;
});
  

const questions= [
    {
        type: 'input',
        name: 'firstN',
        message: "Enter employee\'s first name:"
    },
    {
        type: 'input',
        name: 'lastN',
        message: "Enter employee\'s last name:"
    },
    {
        type: 'list',
        name: 'Role',
        message: "Select employee\'s role:",
        choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 
        'Account Manager', 'Accountant', 'Legal Team Lead']
    },
    {
        type: 'list',
        name: 'manager',
        message: "Select employee\'s manager name?",
    }, 
];

function addItem(){
    inquirer.prompt(questions)
    .then(answer=>{

    });
}

function viewItems(){

}

function changeItem(){

}

module.exports= {addItem, viewItems, changeItem};