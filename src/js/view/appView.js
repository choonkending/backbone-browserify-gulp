var mainTemplate = require('../../templates/main.hbs');
var ticketModel = require('../model/ticket');
var ticketModelList = require('../model/tickets');
var ticketView = require('./ticket');

module.exports = Backbone.View.extend({
	
	// bind to an existing skeleton of the app that
	el: '.main-app',

	// Delegated events
	events: {},

	// At initialization we bind to the relevant events in the 'Tickets' collection
	initialize: function () {
		// todo : Add event bindings bro!
		console.log('App View has been initialized');
		
		// ticketModelList has already been created upon export! You might want to change that bro!

		this.render();
	},

	render: function () {
		this.$el.append(mainTemplate({name: 'Ken'}));
		var view = new ticketView({model: new ticketModel({name: "Ken", title: "It's 2 am here now!"})});
		
		$('.main-app').append( view.render().el );
	}
});

