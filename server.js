const express = require("express");

const app = express();
app.get("/", (request, response) => {
    const { whiteCh, BlackCh } = request.query; 
    response.json({
        whiteCh:BlackCh, 
        BlackCh:whiteCh
    });
    });

app.listen(3000 , () => {
    console.log("listening on poet 3000 ! ");
