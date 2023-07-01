Name: Alapan Batabyal
Contact: +91-8910069127

--Title: Tambola Ticket Generation using Node.js and server APIs

--Requisites: 

Node: npm dependency modules -  [ express, express-validator, mysql, body-parser ]
MySQL Workbench database connectivity
Http APIs for app.get and app.post
HTML for front-end view
JS files for process functions and backend activity

--File Details:

logic.js - this file has function createTanmbolaTicket algorithm which returns the generated ticket value as per the mentioned constraints

index.js - this is the main js file creates express-> app  login api to the user view using user input and mysql databsase connectivity to authenticate and validate
the same with {users} database and query results. The user input is taken up from index.html and validated accordingly after which the welcome.html is redirected from where user
can input the number for ticket generation. The js file then calls logic.js and passes the number as parameter to generate ticket. The ticket
is stored in the database {tickets} with unique_id(USER-TIMESTAMP). The databse details are fetched and the user can view all the tickets belonging
to him in the next redirected page(NOTE: Please refresh this page once if no data on page)

NOTE: The connections logic - app/<http request,response> and mysql DB connections are integrated in this index.js file.

index.htmlm - user login section

welcome.html - user number input section to tickets view

MySQL_DB - exported MySQL Workbench db table list schemas {users, tickets}

--Workflow:

To start with:
1. node terminal > node index.js //Note: Above mentioned node packages are necessary to run the js successfully
2. http://localhost:4000 will run index.html > user login //provide users table database to check with
3. after login, prompted to input number //number for Tambola ticket
4. redirected view of all tickets for the logged in users //adds the last generated ticket and gives view of all tickets for current user

NOTE: I have attached a video shot of the node server run to login api in localhost 4000.

--Comments:

> For connections, express app/ -> localhost and MySql db server are used but there can be other ways of achieving the APIs.
> In the ticket algorithm, node struct is used. It returns the ticket data quite effectively
> The database contains the ticket data with the html tags within so that it can be easier for fetching the same pass it over the html get response.
> For a large amount of user data, there would not probably be any complexity over time due to the integration and lesser resource usage

/---Please feel free contact me for any infromation or any issues faced while checking---/