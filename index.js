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
    res.status(201).send("Fruits added successfully!");
});

const cars = [
    { id: 1, make: 'Toyota', model: 'Camry', year: 2020 },
    { id: 2, make: 'Honda', model: 'Civic', year: 2019 },
    { id: 3, make: 'Ford', model: 'Mustang', year: 2021 },
    { id: 4, make: 'Chevrolet', model: 'Malibu', year: 2018 },
    { id: 5, make: 'Tesla', model: 'Model S', year: 2022 },
    { id: 6, make: 'Nissan', model: 'Altima', year: 2020 },
    { id: 7, make: 'BMW', model: '3 Series', year: 1960 },
    { id: 8, make: 'Audi', model: 'A4', year: 2020 },
    { id: 9, make: 'Mercedes-Benz', model: 'C-Class', year: 2019 },
    { id: 10, make: 'Lexus', model: 'RX', year: 2021 }
];

//get cars list
app.get('/cars', (req, res)=>{
    res.json(cars)
})

//post a new car
app.post('/cars', (req, res)=>{
    console.log(req.body)
    cars.push(req.body);
    res.status(201).send("New car added successfully!")
})

app.listen(400, ()=>{console.log("Server started running on port:400")});