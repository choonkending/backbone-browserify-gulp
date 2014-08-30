var templates = require('../templates/main.hbs');
var TicketView = require('./view/ticket');
var TicketModel = require('./model/ticket');

(function myFirstFunction () {
	document.body.innerHTML = templates({name: 'Ken'});
	
	
})();