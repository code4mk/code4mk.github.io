var serverIO = require('socket.io')(9000);

serverIO.on('connection', (socket) => {
  // fetch
  socket.on('message', (response) => {
    console.log(response.name)
   });
   // sent
   socket.emit('post', {
     title: 'data server to cilent',
     like: 100
   })
  socket.on('disconnect', () => { });
});

var socket = io('http://localhost:9000');
socket.on('connect', () => {
  socket.send('hi');
  //  sent
  socket.emit('message',{
    id: 1,
    name: 'socket.io'
  })
  // fetch
  socket.on('post', (response) => {
    console.log(response.title)
  });
});
