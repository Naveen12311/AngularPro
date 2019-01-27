const express = require('express');

let helloworld = (req,res) => {
    res.send('example')
}
let example = (req,res) =>{
     res.send('hello');
}

module.exports={
    hello:helloworld,
    example:example
}