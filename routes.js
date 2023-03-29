const fs = require('fs');

const requestHandler = (req,res) =>{
    const url = req.url;
    const method = req.method;
    if(url === '/home') {
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body><h1>Welcome Home</h1></body>');
        res.write('</html>');
        res.end();
    }else if(url === '/about'){
        res.write('<html>');
        res.write('<head><title>About</title></head>');
        res.write('<body><h1>Welcome to About Us page</h1></body>')
        res.write('</html>');
        res.end();
    }else if(url === '/node'){
        res.write('<html>');
        res.write('<head><title>Node</title></head>');
        res.write('<body><h1> Welcome to my Node Js project</h1></body>')
        res.write('</html>');
        res.end();
    }else if(url === '/') {
        fs.readFile("message.txt", { encoding: 'utf-8'}, (err,data)=>{
            console.log(err);
            res.write('<html>');
            res.write('<head><title>Node</title></head>');
            res.write(`<body><h1>${data}</h1></body>`)
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button>Submit</button></form></body>')
            res.write('</html>');
            res.end();
        })
        
    }else if(url === '/message' && method == 'POST') {
        const body = [];
        req.on('data', (chunk) => {
             console.log(chunk);
             body.push(chunk);
        });
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile("message.txt", message, (err)=> {
                console.log('indise fs.writefile');
                res.statusCode = 302;
                res.setHeader('Location', '/');
                console.log(message);
                return res.end();
            })
            
        })
        
    }
}


module.exports = requestHandler;
