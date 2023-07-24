import React from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
export default function Feed() {
  return (
    <div className='feed' >
    <div className='feed__header'>
     <h2>Home</h2> 
    </div>
    <TweetBox />
    <Post 
    displayName= "Sean Mathew"
    username="Sean"
    verified={true}
    text="its workinggggg!!"
    avatar="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-
    storefronts-production/themes/284832/settings_
    images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_
    black.png"
    image="https://www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif"/>
    
    </div>
  )
}


