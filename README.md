Koa Test - Movies
==================

Databases
--------------------
Create two local Postgres databases 
+ `movies_koa` and `movies_koa_test`

Run Db Migration
--------------------
Install knex
+ `npm install knex -g`

+ `knex migrate:latest --env development`

Seed DataBase
--------------------
+ `knex seed:run --env development`

Install node modules
--------------------
Run the following command from the root of your source files
+ `npm install`

Execute the app
--------------------------
Load http://localhost:1337

Sanity Check
+ `npm start`

Test
+ `npm test`

