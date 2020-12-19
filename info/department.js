const fs = require('fs');
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

}

function viewItems(){

}

module.exports= {addItem, viewItems};
