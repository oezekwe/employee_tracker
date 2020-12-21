const connection= require('./connection');
const inquirer= require('inquirer');

const Equestions= [
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
        choices: listPositions()
    },
    {
        type: 'list',
        name: 'manager',
        message: "Select employee\'s manager name?",
        choices: listManagers()
    }, 
];

const Rquestions= [
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
        type: 'list',
        name: 'departmentType',
        message: "Name of department:",
        choices: listDepartments()
    } 
];

const Dquestions= [
    {
        type: 'input',
        name: 'departN',
        message: "Enter name of department:"
    } 
];

function listDepartments(){
    var arr= [];
    connection.query(
        'SELECT * FROM department', 
        function(err, res){
            if(err) throw err;
            for(let x=0; x<res.length; x++){
                arr.push(res[x].title);
            }
        }
    );
    return arr;
}

function listPositions(){
    var arr= [];
    connection.query(
        'SELECT role.title FROM role', 
        function(err, res){
            if(err) throw err;
            for(let x=0; x<res.length; x++){
                arr.push(res[x]);
            }
        }
    );
    return arr;
}

function listManagers(){
    var arr= [];
    connection.query(
        'SELECT first_name, last_name FROM employee WHERE manager_id IS NULL', 
        function(err, res){
            if(err) throw err;
            for(let x=0; x<res.length; x++){
                arr.push(res[x].first_name);
            }
        }
    );
    return arr;
    
}

function addItem(str){
    if(str.includes("department")){
        inquirer.prompt(Dquestions)
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
    else if(str.includes("role")){
        inquirer.prompt(Rquestions)
        .then(answer=>{
            var dID= listDepartments().indexOf(answer.departmentType) + 1;
            connection.query(
                'INSERT INTO role SET ?',
                {
                    title: answer.roleN,
                    salary: answer.money,
                    department_id: dID
                },
                function(err, res){
                    if(err) throw err;
                    console.log("Added new role");
                }
            );
        });
    }
    else{
        inquirer.prompt(Equestions)
        .then(answer=>{
            var mID= listManagers().indexOf(answer.manager) + 1;
            var rID= listPositions().indexOf(answer.Role) + 1;
            connection.query(
                'INSERT INTO employee SET ?',
                {
                    first_name: answer.firstN,
                    last_name: answer.lastN,
                    role_id: rID,
                    manager_id: mID
                },
                function(err, res){
                    if(err) throw err;
                    console.log("Added new employee");
                }
            );
        });
    }
}

module.exports= addItem;