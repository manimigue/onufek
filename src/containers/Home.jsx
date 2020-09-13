import React from 'react'
import ReactPlayer from 'react-player/lazy'
import { Cancel } from '@material-ui/icons'
import {useSelector, useDispatch} from 'react-redux'

import {selectPlayed, savePlayed} from '../store/video'

import Pic from '../img/homepic.png'
import Video from  '../video/video.mov'
import '../sass/main/home.scss'
import News from './News'

const Home = () => {
  const played = useSelector(selectPlayed);
  const dispatch = useDispatch()

  return (
    <div className="home">
      {played ? null : 
      <div className="topVideo">
        <Cancel onClick={() => dispatch(savePlayed())} />
        <div className="videoContainer">
          <ReactPlayer url={Video} playing={ReactPlayer.canPlay(Video)} width="100%" height="auto" onEnded={() => dispatch(savePlayed())}/>
        </div>
      </div> }
      <img className="topImage" src={Pic} alt="kefuno. Home" />
      <News />
    </div>
  )
}

export default Home
