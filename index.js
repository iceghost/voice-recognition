const express = require('express');
const app = express();
const ip = require('ip');
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static("./public"));

app.set("view engine","ejs");
app.set("views","./views");
app.get('/', (req, res) => {  
  res.render('index', { title:'The index page!' });
});

server.listen(3000, () => console.log('Example app listening on port 3000!' + ip.address()));

io.on("connection",(socket)=>{
  console.log('Co nguoi dang nhap:' + socket.id);
  socket.on("xin chao",() => {
    console.log('Xin chao');
  });
});