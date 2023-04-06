// import dotenv from 'dotenv';
// import express from 'express'
// import pg from 'pg';
// const dotenv = require('dotenv')
const express = require('express')
const app = express();
const port = process.env.PORT || 3003;
const {Client} = require('pg');
app.use(express.json());

// dotenv.config();
const connectionString = "postgresql://postgres:docker@localhost:5432/studentdemo";
const client = new Client ({connectionString: connectionString});
client.connect();

//let db_URL = ;
//const sql = postgres(process.env.DATABASE_URL);
// app.use(express.static("public"))
app.get('/', (req, res) => {
    res.json({"hello":"world"})
})

app.get('/students', (req, res) => {
    client.query(`SELECT * FROM student;`).then((result)=> {
        res.json(result);
    })
})



app.listen(port, (error) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log(`Listening on port: ${port}`)
    }
})