// packages used in this application
const Manager = require("./library/Manager");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const generateData = require('./src/GenerateData');

let answerArr = [];

// position prompts
const questions = [
  {
    type: 'list',
    name: 'role',
    message: 'What is the role for the employee you would like to add?',
    choices: ['Manager', 'Engineer', 'Intern', 'Im Finished!']
  }
];

// manager prompts
const manager = [
  {
    type: 'input',
    name: 'name',
    message: 'What is Mangers first name?',
  },
  {
    type: 'number',
    name: 'id',
    message: 'What is Managers id number?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is Managers email?',
  },
  {
    type: 'number',
    name: 'office',
    message: 'What is Managers office number?'
  }

];

// engineer prompts
const engineer = [
  {
    type: 'input',
    name: 'name',
    message: 'What is Engineers first name?',
  },
  {
    type: 'number',
    name: 'id',
    message: 'What is Engineers id number?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is Engineers email?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is Engineers Github username?'
  }

];

// intern prompts
const intern = [
  {
    type: 'input',
    name: 'name',
    message: 'What is Interns first name?',
  },
  {
    type: 'number',
    name: 'id',
    message: 'What is Interns id number?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is Interns email?',
  },
  {
    type: 'input',
    name: 'school',
    message: 'What school does Intern attend?'
  }
];



// init app
function init() {
  // init questions
  inquirer.prompt(questions).then(answers => {
    // when done adding new employees then generate team
    if (answers.role === 'Im Finished!') {
      console.log(answerArr);
      generateTeam();
      return;
    }
    // create manager info
    if (answers.role === 'Manager') {
      inquirer.prompt(manager).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
        answerArr.push(manager);
        init();
      })
    }
    // create engineer info
    if (answers.role === 'Engineer') {
      inquirer.prompt(engineer).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        answerArr.push(engineer);
        init();
      })
    }
    // create intern info
    if (answers.role === 'Intern') {
      inquirer.prompt(intern).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        answerArr.push(intern);
        init();
      })
    }
  })
};

// Function to init app
init();


// write the new team member files
function generateTeam() {
  fs.writeFileSync('./dist/TeamGenerated.html', generateHTML(answerArr), "utf-8");
  console.log('Your Team Has Been Created!')
};