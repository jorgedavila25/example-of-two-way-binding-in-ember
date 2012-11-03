App = Ember.Application.create({});

App.hex = Ember.Object.create({
	color: ''
});

App.hextwo = Ember.Object.create({
	secondcolorBinding: "App.hex.color"
});

App.box = Ember.View.extend({
	box: function(){
		return "background-color:#"+ App.get('hextwo.secondcolor') +";" + "height:50px;" + "width:50px;" +"margin: 10px;"
	}.property("App.hextwo.secondcolor")
});