/**
 * Created by zhengma on 5/19/16.
 */

var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
// app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/'));

// set the home page route
// app.get('/', function(req, res) {
//
//     // ejs render automatically looks in the views folder
//     res.render('index');
// });

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});


app.get('/academicCV', function(req, res){

	var options = {
	    root: __dirname, 
	    dotfiles: 'deny',
	    headers: {
		'x-timestamp': Date.now(),
	        'x-sent': true
	    }
  	};
	// res.sendFile('/academicCV.pdf');

	fileName = "academicCV.pdf";
	res.sendFile(fileName, options, function (err) {
		    if (err) {
		      console.log(err);
		      res.status(err.status).end();
		    }
		    else {
		      console.log('Sent:', fileName);
		    }
	  });
});


