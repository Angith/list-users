# list-users

This is a simple list users application

## prerequisites
 - docker
 - docker-compose

## Tech stack
 - Node.js
 - HTML

## How to run in local

clone the project
`git clone https://github.com/Angith/list-users.git`

checkout to master branch
`git checkout master`

up the psql container
`npm run docker:up  `

run API
`npm run start`

load the add user html page in browsor using following url
`{project-path}/list-users/demo/addUser.html`
adding a user will lead to user list UI