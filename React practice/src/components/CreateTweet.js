import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateTweet = ({ textInput, setTextInput, tweets, setTweets }) => {
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitTweetHandler = (e) => {
    e.preventDefault();
    //console.log("hey");
    setTweets([...tweets, { message: textInput, id: uuidv4() }]);
    setTextInput("");
  };
  return (
    <div>
      <form>
        <textarea
          value={textInput}
          onChange={userInputHandler}
          cols="30"
          rows="3"
        ></textarea>
      </form>
      <button onClick={submitTweetHandler}>Submit</button>
    </div>
  );
};

export default CreateTweet;
