var Twitter = require('twitter');
var twitterCredentials = require('./keys.js');
var fs = require("fs");

//Get the twitter keys from key.js file
var client = new Twitter(twitterCredentials.twitterKeys);

//These are the parameters for the API call
var params = {
	screen_name: 'cpaquestions',
	      count: 20
};

//Perform the API call and return data
client.get('statuses/user_timeline.json', params, function(error, tweets, response) {
  var dataToFile;
  if (!error) {
  	for (var i = 0; i < tweets.length; i++) {
  		console.log(tweets[i].created_at + " " + tweets[i].text);
  		console.log("-------------------------------");
  		dataToFile = tweets[i].created_at + " " + tweets[i].text + "\n-----------\n";
 // This block of code will append tweets to the file called "log.txt".
 	fs.appendFile("log.txt", dataToFile, function(err) {

   // If the code experiences any errors it will log the error to the console.
   if (err) {
     return console.log(err);
   }
 		})
  	}
  }

  console.log("Last 20 tweets are now displayed on the screen and saved in log.txt.");

});


