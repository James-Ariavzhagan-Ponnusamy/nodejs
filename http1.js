var h1 = require('http')

var server1 = h1.createServer((req, res)=>{
  
  res.write('hello world');
  res.end();
})

server1.listen(8000)

