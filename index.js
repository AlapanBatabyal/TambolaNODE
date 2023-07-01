const createTambolaTicket = require("./logic.js");

const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();

const app = express();
app.use("/assets",express.static("assets"));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Alapan@123",
    database: "user_list"
});


// connect to the database
connection.connect(function(error){
  if (error) throw error
  else console.log("connected to the database successfully!")
});


app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
})

  var data;
  var insertData;
  var x=0;
  var t_id;
  var numcheck = [5,6,7,8,9,10,11,12,13,14,15];
  var text1 = `<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
  body{
    background-color: white;
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;}
  h3,h4,h5{
    background-color: #7f379b;
    color: #fff;
    letter-spacing: 1px;
    font-size: 1em;
    width:fit-content;
    padding: 5px;
    border: 2px ;
    border-radius: 8px;
    box-shadow: #122A0A;}
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    letter-spacing: 2px;
    line-height: 1.5;
    flex-direction: column;
    margin: 20px;
    padding: 5px;
    width: 25%;
    color: #ff6a85;
    border: 2px ;
    border-radius: 15px ;
    box-shadow: 0 0 15px #2F0B3A;}
  </style>`;
  //used style to render css on the final result
  
  text1 = text1 + `<h2 style="color: #7f379b;">The records of tickets for user</h2><br>\n`;
  app.post("/",encoder, function(req,res){
    var username = req.body.username;
  var password = req.body.password;
  var userno = req.body.usernumber;

        connection.query("select * from users where username = ? and password = ?",[username,password],function(error,results,fields){
        if (results.length > 0) {
            res.redirect("/welcome");
            t_id = username;
        } else if(typeof userno !== 'undefined')  {
          x = userno;
          for(i=0;i<numcheck.length;i++)
            if(numcheck[i]==x) {
              console.log('U No: '+numcheck[i]);
              data = createTambolaTicket(numcheck[i]);
              t_id = t_id +"-"+ data[0]; //t_id generate {username-timestamp}
              insertData = {
                ticket_id: t_id,
                tickets: data[1]
              };
              //send to DB


              connection.query('INSERT INTO tickets SET ?', insertData, (err, result) => {
                if (err) {  console.log('Insertion Error!');return;}
                console.log('Data inserted successfully');
              });
              const index = t_id.slice(0,t_id.indexOf('-'));
              console.log(index);
              // Set the display query message
              $query = `SELECT * from tickets where ticket_id like "${index}%"`;

              connection.query($query, function(e, rows) {
              if(e){

              // // Show the error message
              console.log("Error ocurred in executing the query.");
              return;
              }
              /* Display the formatted data retrieved from table
              using for loop */
              for(let row of rows) {
                text1 = text1 + "<div>";
                // console.log(row['ticket_id'],"\t\t",row['tickets']);
                text1 = text1 + `<h4 style="">`+  row['ticket_id'] + "</h4><br>"+row['tickets']+"<br><br>";
                text1 = text1 + "</div>";
              }
              console.log(text1);
              });
            }
          res.redirect("/data");
        }
        else  {
          var errMessage =  '<script type="text/javascript"> alert("Incorrect Username/Password!"); </script>';
          res.send(errMessage);
        }
        res.end();
    })
})


// when login is success
app.get("/welcome",function(req,res){
  res.sendFile(__dirname + "/welcome.html")
})

//after ticket genaration data {user 's ticket lists} sent to html
app.get("/data",function(req,res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(text1);
})

// set app port at localhost 4000 
app.listen(4000);