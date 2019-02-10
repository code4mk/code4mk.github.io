---
description: journey socketio
keywords: js, socket
title: journey socketio
toc_max: 4
---

### socketio Relationship

![client images](https://cdn-images-1.medium.com/max/2000/1*Ju3JkhXr0Jrb_tAb0LiIhw.png)

### server-side

```js
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
```

### client-side

```js
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
```

### emit cheetsheat

![emit](https://cdn-images-1.medium.com/max/2000/1*1hAQzCAuZzhkBPtMpsN5KA.png)

### emit

```js
// sending to sender-client only
socket.emit('message', "this is a test");

// sending to all clients, include sender
io.emit('message', "this is a test");

// sending to all clients except sender
socket.broadcast.emit('message', "this is a test");

// sending to all clients in 'game' room(channel) except sender
socket.broadcast.to('game').emit('message', 'nice game');

// sending to all clients in 'game' room(channel), include sender
io.in('game').emit('message', 'cool game');

// sending to sender client, only if they are in 'game' room(channel)
socket.to('game').emit('message', 'enjoy the game');

// sending to all clients in namespace 'myNamespace', include sender
io.of('myNamespace').emit('message', 'gg');

// sending to individual socketid (server-side)
socket.broadcast.to(socketid).emit('message', 'for your eyes only');

// join to subscribe the socket to a given channel (server-side):
socket.join('some room');

// then simply use to or in (they are the same) when broadcasting or emitting (server-side)
io.to('some room').emit('some event'):

// leave to unsubscribe the socket to a given channel (server-side)
socket.leave('some room');

```

### client others

```js
var socket = io.connect("https://localhost:8082", {
                query:                          'key=nokey',
                'reconnection limit':           10000,
                'max reconnection attempts':    Infinity,
                reconnection:                false,
                upgrade:                        false,
                rememberUpgrade:       true,
                transports:                     ['websocket']
            });
socket .on('connect', function () {
      socket.emit('name', 'vis.0');
      socket.emit('authenticate',  function () {});
});
```

### sources

* [devdocs](http://devdocs.io/socketio/)
* [room socket](https://gist.github.com/mostafa6765/482d28caa02f59f6da12d13ea907e856)
* [room socket](https://gist.github.com/crtr0/2896891)

* [mongo socket 1](https://www.youtube.com/watch?v=8Y6mWhcdSUM)
* [mongo socket 2 / last](https://www.youtube.com/watch?v=hrRue5Rt6Is)


* [chat.io](https://github.com/OmarElGabry/chat.io/blob/master/app/socket/index.js)

* [angular](https://github.com/ShankyTiwari/Realtime-Private-Chat-using-AngularJs-Nodejs-and-Mysql)

* [socketio redis](https://github.com/socketio/socket.io-redis)

* [short journey socket medium](https://medium.com/code4mk-org/a-short-journey-of-socket-io-with-code4mk-86c9e198720e)

* [how implement with](https://stackoverflow.com/questions/6398887/using-php-with-socket-io)

* [net nija playlist github](https://github.com/iamshaunjp/websockets-playlist/blob/lesson-5/public/chat.js)
