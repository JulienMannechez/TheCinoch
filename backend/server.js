const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/home', (req, res) => {
    const messages = ["coucou", "c'est", "moi"];
    res.send(messages);
});

app.listen(port, () => console.log('listening ...'));