const fs = require('fs');
const inquirer= require('inquirer');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'seQ&w3bY',
    database: ''
});
  
connection.connect(err => {
    if (err) throw err;
});
  

const questions= [
    {
        type: 'input',
        name: 'firstN',
        message: "Enter employee\'s first name:",
    },
    {
        type: 'input',
        name: 'lastN',
        message: "Enter employee\'s last name:",
    },
    {
        type: 'input',
        name: 'Role',
        message: "Enter employee\'s role:",
    },
    {
        type: 'input',
        name: 'manager',
        message: "Enter employee\'s manager name?",
    }, 
];

function addItem(){

}

function viewItems(){

}

function changeItem(){

}

module.exports= {addItem, viewItems, changeItem};