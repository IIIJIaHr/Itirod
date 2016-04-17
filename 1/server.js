var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

var clients = [];


server.on('listening', function(e) {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ' : ' + address.port);
});

server.on('message', function(message, remote) {
    var exist = 0;
    for (var i = 0; i < clients.length; i++) {
        if (clients[i].port === remote.port) {
            exist = 1;
        }
    }
    if (exist === 0) {
        clients.push({ port: remote.port, host: remote.host });
    }
    console.log(remote.address + ' : ' + remote.port + ' - ' + message);

    clients.forEach(function(client) {
            server.send(message, 0, message.length, client.port, client.host);
    });

    server.send(message, 0, message.length, remote.port, remote.host);
});

server.bind(PORT, HOST);
