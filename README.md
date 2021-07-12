  # **Team Profile Generator**

## Description

This project allows a company to onboard new employees and keeps a list of information for each member of their team. When you click on the email for any person it will open the email up in your primary email application.

## Usage
Install necessary packages, then open terminal and run the following code in command line : node index.js. You will be prompted to fill out employee information. There will be additional questions based on the employee type selected. Once all employees have been added, select 'Im Finished'. Your employee list will then generate to the TeamGenerated.html where you can then view your team.

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

## Expectation
Run the following code in your terminal to run the tests for this application : npm run test. When you run this you will receive a pass for all four test pages.


  ## _Deployed URL_: https://github.com/Aislynnrose/TeamProfileGenerator
  
  ## _GitHub URL_: https://github.com/Aislynnrose/TeamProfileGenerator

  ## _Email Me_: aislynn.rose@gmail.com

  ## Preview: ![Screenshot](Preview.PNG)

  ## Sample: ![GIF](GIF.gif)

  # Technologies Used
  * HTML
  * CSS
  * Bootstrap
  * JavaScript
  * Node.js