// Model for a Ticket 
module.exports = Backbone.Model.extend({
	defaults : {
		name: 'Ken',
		description: 'Awesome',
		date: 'today',
		completed: false
	},
	initialize: function () {
		console.log('This model has been initialized');
	}
});