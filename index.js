const express = require('express');
const app = express();
const appconfig = require('./appconfig/appconfig');
const mongoose = require('mongoose')
const fs = require('fs');


const routepath = './routes';
fs.readdirSync(routepath).forEach(function (file) {
if(~file.indexOf('.js')){
    console.log("including file")
    let router = require(routepath + '/' + file)
    router.setRoute(app);
}
}
);

app.listen(appconfig.port,() =>{
     console.log("request is being made")
     
     mongoose.connect(appconfig.db.uri)

})

mongoose.connection.on('error',function (err)
{
    console.log("error connecting to database");
}
);

mongoose.connection.on('open',function (err){
    if(err){
        console.log("error inside the database");
    }else{
        console.log("successfully connected with databse");
    }
})


let modelspath = './models' 
fs.readdirSync(modelspath).forEach(function (file){
    if(~file.indexOf('.js')){
        require(modelspath + '/' + file)
    }
})