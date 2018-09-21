// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		
		{
		path: '/info-producto-uno/',
    	url: 'info-producto-uno.html',
    	name: 'info-producto-uno',
  		},
		
		{
		path: '/info-producto-dos/',
    	url: 'info-producto-dos.html',
    	name: 'info-producto-dos',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

