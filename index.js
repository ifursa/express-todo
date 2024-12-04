import * as MockData from './mockData.js'
import express from 'express'
import cors from 'cors'

const app = express();
const PORT = 3310;


app.use(cors());
app.use(express.json());


// TODOS

app.get('/todos', (req, res)=>{
    res.send(MockData.todos);
});

app.patch('/todos/:id', (req, res)=>{
  if(typeof req.body.completed === 'boolean'){
    res.status(200);
    res.send({message: 'ok'});
  } else {
    res.status(400);
    res.send({message: 'Bad Request'});
  }
});

app.delete('/todos/:id', (req, res)=>{
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.send({message: 'ok'});
});

app.post('/todos',(req, res)=>{
  if (
    typeof req.body.title === 'string' &&
    req.body.title.length > 0 &&
    req.body.id &&
    typeof req.body.completed === 'boolean'
  ) {
    res.setHeader('Content-Type', 'application/json');
    res.status(201);
    res.send({message: 'ok'});
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.status(400);
    res.send({message: 'error'});
    console.error('error!')
  }
});



// Users

app.get('/users', (req, res)=>{
  res.status(200);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(MockData.users));
});


// APP LAUNCH HERE
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);