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
        name: 'departN',
        message: "Enter name of department:"
    } 
];

function addItem(){

}

function viewItems(){

}

module.exports= {addItem, viewItems};
