# A simple tax filing app project built on MERN stack

Live version: https://tax-jack.herokuapp.com/

This project uses the MERN stack
(MongoDB, ExpressJs, ReactJs & NodeJs)

Project features / highlights:

-Login / register functionality

-Middleware protected routes for: logged in user routes

-Authentication using Json web tokens

-logged in users can: create records, read records & update records
(it is implemented in the following way:
logged in users create new ITR -> stores to Db while redirecting to preview page -> reads from db for preview page ->
can modify at preview stage & Update to the db)

-API routes for full CRUD operations are part of the project. Delete operations are out of scope for this assignment but you can try it using record id from console logs.

(you can try out chrome developer console for logs, important tasks & MongoDB operations are logged)

-State management using useContext & useState

-React Router for routing

-React-Bootstrap for ui components

-And more...

Signup -> Login -> create new ITR -> store to Db -> can modify at preview stage & Update the db -> after confirmation shows taxable income.

(Note for local version:
'npm start' folder at root &
cd to frontend 'npm start'

--or you can use concurrently package)
