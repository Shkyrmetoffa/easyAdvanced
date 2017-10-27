const http = require('http');
const fs = require('fs');
let counter = 0;

const server = http.createServer((req, res) => {
    fs.readFile('../my-img.jpg', (err, data) => {
            if (err) {
                res.end('<strong>Error</strong>');
                throw new Error('Error while reading index.html');
            };
            // res.setHeader('Content-Type', 'image/jpg'); 
            res.end(data);
        })
        //
        // console.log(req.headers, req.method, req.url);
        // res.setHeader('Content-Type', 'text/html');
        // http.get('http://wttr.in/~kharkov', (response) => {
        //         if (response.statusCode !== 200) {
        //             res.end('<strong style="color:red">Error!</stong>');
        //             return;
        //         }
        //         response.setEncoding('utf-8');
        //         let result = "";
        //         response.on('data', data => result += data);
        //         response.on('end', () => {
        //             const upgradeResult = result.replace('</style>', 'body{background: red}</style>');
        //             res.end(upgradeResult);
        //         })

    //     })
    // res.end('<strong>Hello, Node!</stong>');
});


server.listen(3000, () => console.log('Server is listening on 3000'));