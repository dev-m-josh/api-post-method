const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.send("welcome home")
});

const fruits = [
    {
        item: 'mangoes',
        quantity: '3',
        id: 1
    },
    {
        item: 'oranges',
        quantity: '5',
        id: 2
    },
    {
        item: 'pineapples',
        quantity: '2',
        id: 3
    },
    {
        item: 'banana',
        quantity: '1',
        id: 4
    },
];

//get all the fruits
app.get('/fruits', (req,res)=>{
    res.json(fruits)
});

//post a new fruit
app .post('/fruits', (req, res)=>{
    console.log(req.body);
    fruits.push(req.body);
    res.status(201).send("Fruits added succesifully!");
});

app.listen(400, ()=>{console.log("Server started running on port:400")});