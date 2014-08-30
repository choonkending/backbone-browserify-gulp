var ticketTemplate = require('../../templates/ticket.hbs');


// The DOM element for a single ticket
module.exports = Backbone.View.extend({
	
	tagName: 'div',

	// DOM events specific to an item
	events: {},

	// The ticket view listens for changes in the model, re-rendering. Since there's a
	// one-to-one correspondence between a **Ticket** and a **TicketView** in this app,
	// we set a direct reference on the model for convenience.
	initialize : function () {
		console.log('Ticket View has been initialized');
		//this.render();
		//this.listenTo(this.model, 'change', this.render);
	},

	// Re-renders the attributes of the ticket
	render : function () {
		this.$el.html( ticketTemplate(this.model.attributes) );
		return this;
	}
});