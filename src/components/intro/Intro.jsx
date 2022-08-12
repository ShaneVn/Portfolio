import "./intro.scss"
import { init } from "ityped"
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef()

    useEffect(() => {
        init(textRef.current,
            { showCursor: true, 
                backDelay:1500, 
                backSpeed: 60,
                
                strings: ['JavaScript Developer', 'React Developer']})
    
    }, [])
    
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="image/react.png" alt="react-logo" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I am</h2>
                    <h1>Shane Xian</h1>
                    <h3>A <span ref={textRef}></span> </h3>
                </div>
                <a href="#portfolio">
                <img src="/image/down.png" alt="down-arrow"/>
                </a>
            </div>
        </div>
    )
}
