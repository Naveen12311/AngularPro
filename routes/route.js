const express = require('express');
const app = express();
const contlr = require('../controller/controller')

let setRoute = (app) =>{

app.get('/hello',contlr.hello)
app.get('/example',contlr.example)

}

module.exports = {
    setRoute :setRoute
}