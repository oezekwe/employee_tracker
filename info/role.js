const fs = require('fs');
const connection= require('../index');
const inquirer= require('inquirer');
const mysql = require('mysql2');

/*connection.connect(err => {
    if (err) throw err;
});*/


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
    connection.connect(err => {
        if (err) throw err;
        connection.query(
            'SELECT * FROM role',

            function(err, res){
                if(err) throw err;
                console.table(res);
            }
        );
    });
}