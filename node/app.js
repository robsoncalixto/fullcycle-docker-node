const  express = require('express');
const peopleService = require('./service/peopleService');
const app = express();
const port = 3000;

app.get('/', async (req, res) => await peopleService(req, res));

app.listen(port, ()=> {
    console.log(`runing to the port ${port}`);
});