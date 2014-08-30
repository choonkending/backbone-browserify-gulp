var modelly = Backbone.Model.extend({
	defaults : {
		name: 'Ken',
		description: 'Awesome',
		date: 'today',
		completed: false
	},
});
console.log(new modelly());
module.export = modelly;