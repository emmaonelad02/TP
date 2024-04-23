const express = require("express");
const app = express();
const port = 5000;
const data = require("./data");
//const nodemon = require("./data");

app.use(express.urlencoded({extends:true}))

app.use(express.json ());
// Ajouter une tache
app.post('/todos', (req, res) =>{
    const newTodo = req.body;
    const createdTodo = data.addTast(newTodo);
    res.json(createdTodo);

});

// Modifier tache
app.put('/todos/:id', (req, res) =>{
    const id = req.param.id;
    const updatedTodo = data.updatedTodo(id, req.body);
    res.json(updatedTodo);

});

// Afficher les liste de touttes les taches
app.get('/todos/:id', (req, res) =>{
    const todos = data.getAllTask();
    res.json(todos);

});

// Les détail des taches
app.get('/todos/:id', (req, res) =>{
    const id = req.params.id;
    const todos = data.getTaskId(id);
    res.json(todos);

});

// Supprimer tache
app.delete('/todos/:id', (req, res) =>{
    const id = req.params.id;
    const todos = data.deleteTask(id);
    res.sendStatus(204);

});

// Filtrer taches
app.get('/todos', (req, res) =>{
    const searchQuery = req.query.search;
    const FilteredTodos = data.searchTask(searchQuery );
    res.json(FilteredTodos);

});

// Trier tache

app.get('/todos/:order', (req, res) =>{
    const orderTodos  = data.orderTaskByPriory();
    res.json(orderTodos);

});

// Api erreur

app.use((req, res, next) =>{
    res.status(404).send('Endpoint not found');

});

// Demarrer le serveur
app.listen(port,() =>{
    console.log('Serveur listening at http://localhost:${port}');

});