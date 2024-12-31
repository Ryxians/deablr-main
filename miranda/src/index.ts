import express from "express";

const app = express();

/**
 * @description ping request to demonstrate api is running
 */
app.all('/ping', (_, res) => {
    res.send('Pong!');
})

app.listen(28001);