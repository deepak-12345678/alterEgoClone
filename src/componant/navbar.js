import React from 'react'
import ReactPlayer from 'react-player'
import img_cont from "./main_logo_awards.png"

export default function Navbar() {
    return (
        <>
        <div className='page1'>
            <div className="upper">
            <ReactPlayer width='100vw' height='100vh' url="https://player.vimeo.com/video/626392197" playing={true} muted={true} loop={true} />
            </div>
            <div className="nav">
            <div className='ham'>
                <div className="div1"></div>
                <div className="div2"></div>
            </div></div>
            <div className="major2">
            <center><div className="mag"></div></center>
            <center><div className="mag1"></div></center>
            <div className="mag2">
                <center><button>METAVERSE</button></center>
            </div>
            </div>
            <div className="text">
                <div className="left"><div className="line"></div>MILAN</div>
                <div className="right">MONACO <div className="line"></div></div>
            </div>
            <div className="awards">
                <img src={img_cont} alt="" />
            </div>
            <div className="anilinebottom"></div>
            <div className="aniline"></div>
            
        </div>
        
        </>
  )
}

