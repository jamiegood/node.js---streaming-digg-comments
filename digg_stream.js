// Loading required modules for the module
var http = require('http'), // Provide the createClient() method used to create the request.
    buffer = require('buffer').Buffer, // Used for credentials encoding.
    EventEmitter = require('events').EventEmitter,
	io = require('socket.io'),
	fs = require('fs'); // Used for event emission.


	function handler (req, res) {
	  fs.readFile(__dirname + '/index.html',
	  function (err, data) {
	    if (err) {
	      res.writeHead(500);
	      return res.end('Error loading index.html');
	    }

	    res.writeHead(200);
	    res.end(data);
	  });
	}


var server_port = 8080;
server = http.createServer(handler);
server.listen(server_port);
var iosocket = io.listen(server);

var counter = 0;

var options = {
	host: 'services.digg.com', 
	port: 80,
	path: '/2.0/stream', 
	method: 'GET'
};


var store = 'this is the start:';

var req = require('http').request(options, function(res) {

 	console.log('STATUS: ' + res.statusCode); 
	console.log('HEADERS: ' + JSON.stringify(res.headers)); 
	
	res.setEncoding('utf8');
	
	res.on('data', function (chunk) { 
		console.log('BODY: ' + chunk);
		store = chunk;
		
 		iosocket.sockets.emit('message', chunk);

				 //socket.broadcast.emit('message', counter + "::::" + chunk);

	}); 
});

// iosocket.sockets.on('connection', function (socket) {
// 	socket.on('message', function(data) {
// 
// 		socket.emit('message', data);
// 	});
// });



// write data to request body
req.write("data\n"); 
req.write("data\n"); 
req.end();