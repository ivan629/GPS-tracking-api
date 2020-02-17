import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';

import appRouters from './routers';
const port = 7000;

const expressApp = express();
expressApp.use(bodyParser.json());

appRouters(expressApp);

const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('Hello Node.js Server!')
};

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});
