var ticket = require('./ticket');

var ticketList = Backbone.Collection.extend({

	// Reference to this collection's model
	model: ticket
});

module.exports = new ticketList();