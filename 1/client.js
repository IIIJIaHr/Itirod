var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var message = new Buffer("I'm here.");

var client = dgram.createSocket('udp4');


client.send(message, 0, message.length, PORT, HOST, function(err, bytes){
    if(err) throw err;
    console.log('UDP message sent to ' + HOST + ' : ' + PORT);
});

process.stdin.on('data', function(data){
    client.send(data, 0, data.length, PORT, HOST);
});

client.on('message', function(message, remote){
    console.log(remote.address + ' : ' + remote.port + ' - ' + message + '\n');
});