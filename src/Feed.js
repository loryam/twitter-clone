import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox.js";
// import logo from "./Logo_roundbackground_black.png";
import db from "./firebase.js";
import Post from "./Post.js";
import "./Feed.css";
import FlipMove from "react-flip-move";
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      {/* Header*/}
      <div className="feed_header">
        <h2>Home</h2>
      </div>

      {/*Tweet box */}
      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
