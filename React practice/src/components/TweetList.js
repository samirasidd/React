import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ name, tweets, setTweets, tweet }) => {
  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet
          tweets={tweets}
          name={name}
          tweet={tweet}
          setTweets={setTweets}
          key={tweet.id}
        />
      ))}
    </div>
  );
};

export default TweetList;
