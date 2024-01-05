const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud'

})


app.get('/', (re, res) => {
    return res.json("From backend side")
})

app.get('/users', (req, res) => {
    const sql = "SELECT * FROM users"
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})


app.post('/add-user', (req, res) => {
    const data = req.body; // This is the data sent from the React form

    const sql = "INSERT INTO users SET ?"; // SQL query to insert data into the 'users' table
    db.query(sql, data, (err, result) => {
      if (err) return res.json(err);
      return res.json({ message: 'User added successfully' });
    });
});


app.listen(8081, () => {
    console.log("Listening");
})