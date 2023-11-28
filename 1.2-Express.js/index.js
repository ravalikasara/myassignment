const express = require("express");
const path = require("path");

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const app = express();

const dbPath = path.join(__dirname, "posts.db");

let db = null;

app.use((req, res, next) => {
  const timestamp = new Date() // time 
  console.log(`${timestamp}  Requested URL:- ${req.url}`); // here we log the time along with url 
  next();
});
  // DB Initializing 
const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("Server Running at http://localhost:3000/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();

 //routing posts 


app.get("/posts/", async (request, response) => {
  const getBooksQuery = `
    SELECT
      *
    FROM
      posts;`;
  const booksArray = await db.all(getBooksQuery);

  response.json(booksArray);
});

