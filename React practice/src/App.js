import React, { useState, useEffect } from "react";
import TweetList from "./components/TweetList.js";
import CreateTweet from "./components/CreateTweet";

function App() {
  const [name, setName] = useState("Samira");
  //const message = "Hey";

  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    console.log("a function");
  }, [textInput]);
  return (
    <div>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList setTweets={setTweets} name={name} tweets={tweets} />
    </div>
  );
}

export default App;
