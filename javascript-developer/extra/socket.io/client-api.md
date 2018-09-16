---
description: client api  socketio
keywords: js, socket
title: client api socketio
toc_max: 4
---


### client connect

```js

<script src="/socket.io/socket.io.js"></script>
<script>
  const socket = io('http://localhost');
</script>

// or
const io = require('socket.io-client');
// or with import syntax
import io from 'socket.io-client';
```

### client api

```js
socket.on('connect', () => { })
socket.on('disconnect', () => { })
socket.on('connect_error', (error) => { })
socket.on('connect+timeout', (timeout) => { })
socket.on('error', (error) => { })
socket.on('reconnect', (attemptNumber) => { })
socket.on('reconnect_attempt', (attemptNumber) => { })
socket.on('reconnecting', (attemptNumber) => { })
socket.io('reconnect_error', (error) => { })
socket.on('reconect_failed', (error) => { })
socket.on('ping', () => { })
socket.on('pong', (latency) => { })
```

### function

* `socket.connect()`
* `socket.open()`

* [official api](https://socket.io/docs/client-api/)
