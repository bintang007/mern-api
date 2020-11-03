const express = require('express');

const app = express();

app.use(()=>{
    console.log('hello dunia');
})

app.listen(4000);
