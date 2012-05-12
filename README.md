Node.js + io.socket streaming Digg comments
===========================================
 
## DESCRIPTION
A simple example of how you can stream data via node.js and io.socket.
Data is streamed from the [Digg service](http://developers.digg.com/version2/stream)

## GETTING STARTED
* Make sure you have [node.js](http://nodejs.org/) and [io.socket](http://socket.io/) installed
* Check out the project and run
	node digg_stream.js
* This starts a node server on port 8080. In your browse got to 
	http://localhost:8080
* If all is well you should see a stream of comments in JSON from the Digg comments stream