

const express = require('express');
const Blockchain = require('../blockchain');

const HTTP_PORT = process.env.HTTP_PORT || 3000;
//We create a port, if HTTP is enabled we use this and if is not we use 3000 port
const bodyParser = require('body-parser');

const app = express();
const bc = new Blockchain();
app.use(bodyParser.json());

app.get('/blocks', (req, res)=>{
    res.json(bc.chain);
});

app.post('/mine', (req, res) => {
    //console.log(req.body.data);
    const block = bc.addBlock(req.body.data);
    console.log(`New block added: ${block.toString()}`);
    res.redirect('/blocks');
})

app.listen(HTTP_PORT, ()=>{
    console.log('HTTP server listening on port ' + HTTP_PORT);
})
