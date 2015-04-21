/**
* import the controllers 
**/

/**
* all the route will be here
**/
exports.init = function(app,db,view){
    
    //mainController = mainController.init(db,view);


	var controllers = {};

	function response( obj, req, res ){
		if( typeof controllers[ obj.controller ] == 'undefined' ) {
			controllers[ obj.controller ] = require("../controllers/" + obj.controller +  ".js");
			controllers[ obj.controller ] = controllers[ obj.controller ].init( db, view );	
		}

		controllers[ obj.controller ][ obj.action ](req, res);
	}

	
	app.get('/', function(req, res) {
	   view.display("helloWorld",res);
	});

	app.get('/api',function(req,res){
		response({
			controller: 'main',
			action: 'getAll'
		}, req, res );
	});

    app.post('/api',function(req,res){
        response({
            controller:'main',
            action : 'addUser'
        },req,res);
    });	

	app.get('/api2',function(req,res){
		response({
			controller: 'main',
			action: 'welcome'
		}, req, res );
	});

	
}