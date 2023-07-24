import React from 'react'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar'
import './TweetBox.css'
export default function TweetBox() {
  return (
    <div className='tweetBox'>
      <form>
        <div className="tweetBox__input">
            <Avatar 
            src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-
            storefronts-production/themes/284832/settings_
            images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_
            black.png" />
            <input type="text" 
            placeholder ="what's happening?" />
        </div>
            <input className= "tweetBox__imageInput"
              type="text" 
              placeholder ="Optional:Enter image URL" 
            />
            <Button  className="tweetBox__tweetButton" >
              Tweet
            </Button>
      </form>
    </div>
  )
}

 
