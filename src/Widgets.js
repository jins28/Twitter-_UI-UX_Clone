import React from 'react'
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";


export default function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1680706836691861504"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="thejinsjoy"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/react"}
          options={{ text: "#reactjs is awesome", via: "thejinsjoy" }}
        />
      </div>
    </div>
  );
}

