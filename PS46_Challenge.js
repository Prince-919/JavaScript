
// Challenge Time 
// Display only 280 character of a string like the one used in Twitter

let myTweets = "To run the test, you'll be connected to Measurement Lab (M-Lab) and your IP address will be shared with them and processed by them in accordance with their privacy policy. M-Lab conducts the test and publicly publishes all test results to promote Internet research. Published information includes your IP address and test results,";

// charater cout(slice)
// charater length

let myActualTweet = myTweets.slice(0,279);
console.log(myActualTweet);
console.log(myActualTweet.length);