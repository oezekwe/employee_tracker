const fs = require('fs');
const inquirer= require('inquirer');
const mysql = require('mysql2');

const questions= [
    {
        type: 'input',
        name: 'roleN',
        message: "Enter role\'s name:"
    },
    {
        type: 'input',
        name: 'money',
        message: "Enter salary:"
    },
    {
        type: 'input',
        name: 'departmentType',
        message: "Name of department:"
    },
    {
        type: 'input',
        name: 'manager',
        message: "Enter employee\'s manager name?"
    }, 
];

function addItem(){

}

function viewItems(){

}

module.exports= {addItem, viewItems};