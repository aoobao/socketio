var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);
console.log('service listen 3000');

app.get('/',(req,res)=>{
    res.sendfile(__dirname + '/index.html');
});

io.on('connection',socket=>{
    socket.emit('news',{hello:'world'});
    socket.on('my_other_event',data=>{
        console.log(data);
    });
});