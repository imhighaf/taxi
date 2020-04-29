const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send({
        hi: 'Zdorov, Pavlo)))',
        bi: 'Zdorov, Sandro!)))'
    })
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);