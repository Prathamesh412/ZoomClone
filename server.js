const express = require("express");
const {
    v4: uuidv4
} = require('uuid');

//Initialize app
const app = express();
const Server = require('http').Server(app);

// Set default view engine to EJS
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.redirect(`/${uuidv4()}`)
})

app.get('/:room', (req, res) => {
    res.render('room', {
        roomId: req.params.room
    })
})


Server.listen(3300, function(error){
    if(error){
        console.log("Server cant connect")
    }
    console.log("Server started at post 3300")
});