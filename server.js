const express = require("express");

const app = express();
app.get("/", (request, response) => {
    response.json({
        recipient: "CodeYourFuture code",
        message: "Hello there!"
    });
    });
app.listen(3000 , () => {
    console.log("lisetning on poet 3000 ! ");
})