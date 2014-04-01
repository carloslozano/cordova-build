var cordova = require('cordova');
var $ = require('stringformat')
var args = require("./common/args.js")();
var listen = args.listen;

if (listen.server) {
    var Server = require('./server/Server.js');
    var server = config.serverInstance = new Server();
    server.listen(config);
}
if (listen.client) {
    config.build = (config.build || 'ios,android,wp8').split(/,|;|\s/g);
    require('./client/Client.js')(config);
}
if (listen.agent) {
    require('./agent/Agent.js')(config);
}
