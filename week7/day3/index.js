const express = require("express");
const app = express();
const cors = require("cors")
const port = process.env.PORT || 3007;
const pool = require("./db.js")
console.log(port)

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Welcome to node server");
});

app.post("/todo", async (req, res) => {
    try  {
        const {description} = req.body

        const newTodoInDB = await pool.query("INSERT INTO todo (description) VALUES($1)", [description])
        console.log(req.body); 
        res.json(newTodoInDB);
    } catch (err) {
        console.log(err.message);
    }
});

app.get("/read_todos", async (req, res) => {
    try  {
        const readTodosFromDB = await pool.query("SELECT * from todo ORDER BY todo_id"); 
        res.json(readTodosFromDB.rows);
    } catch (err) {
        console.log(err.message);
    }
});

app.get("/read_todos/:id", async (req, res) => {
    try  {
        const{id} = req.params;
        const readSingleTodoFromDB = await pool.query("SELECT * from todo WHERE todo_id = ($1)", [id]); 
        res.json(readSingleTodoFromDB);
    } catch (err) {
        console.log(err.message);
    }
});

app.put("/update_todos/:id", async (req, res) => {
    try {
        const{id} = req.params;
        const {description} = req.body;

        const updateTodoInDB = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",
        [description, id]
    );
    res.json("Updated the todos yay!");
    } catch(err) {
        console.error(err);
    } 
});

app.delete("/delete_todo/:id", async (req, res) => {
    try {
        const{id} = req.params;
    
        const  deleteTodoInDB = await pool.query("DELETE FROM todo WHERE todo_id = $1",
        [id]
        );
        res.json("Todo was successfully deleted!");
    } catch(err) {
        console.error(err);
    } 
});

app.listen(port, () => {
    console.log(`Your server is being hosted on localhost:${port}`);
});