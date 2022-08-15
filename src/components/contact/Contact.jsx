import "./contact.scss"
import { useState } from "react"

export default function Contact() {
    const [message, setMessage] = useState(false)

    const handleSubmit = (e) =>{

        e.preventDefault()
        setMessage(true)
        e.target.reset()

        setTimeout(()=>{
            setMessage(false)
        }, 2000)
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="image/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit= {handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I will reply ASAP :)</span>}
                </form>
            </div>
        </div>
    )
}
