const { TwitterApi } = require("twitter-api-v2");

const client = new TwitterApi({
  appKey: 'your_appKey',
  appSecret: 'your_appSecret',
  accessToken: 'your_accessToken',
  accessSecret: 'your_accessSecret',
});

const twitterClient = client.readWrite;

async function sendTweet(tweetText) {  

  try {
    console.log("Sending tweet...");
    await twitterClient.v2.tweet(tweetText);
    
  } catch (error) {

    console.error(`An error occurred while sending the tweet: ${error}`);
  }
}

const tweet = `Your tweet text`;

sendTweet(tweet);

module.exports = { sendTweet };
