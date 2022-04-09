import * as http from 'http';

const server = http.createServer((request, response) => {
    if (request.url === '/a')
        response.write("url a has been invoked");
    else
        response.write("incorrect url has been invoked");
    response.end();
});

server.listen(process.env.PORT || 3000
    , () => console.log("server running at port 3005"));