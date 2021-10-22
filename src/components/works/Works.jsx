import "./works.scss"
import { useState } from "react"

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {   id : 1,
            icon : "/image/mobile.png",
            img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
            desc: "My name is Shane Xian, I enjoy web development and create different projects. I am fluent in Chinese and English.",
            title: "About me",
            

        } ,

        {   id : 2,
            icon : "/image/globe.png",
            img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
            desc: " Experience with HTML, CSS, JavaScript, TypeScript, React, Firebase, Git, Bootstrap, APIs, Python, SQL.",
            title: "Technologies"

        } ,
        {   id : 3,
            icon : "/image/writing.png",
            img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
            desc: "Experienced Data Specialist with a demonstrated history of working in the computer software industry. Apple, Telsa, etc.",
            title: "Background"

        }


    ]

    const handleClick = (way) => {
        way === "left"
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
          : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);

      };
      
      return (
        <div className="works" id="works">
          <div
            className="slider"
            style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          >
            {data.map((d) => (
              <div className="container" key={d.id}>
                <div className="item">
                  <div className="left">
                    <div className="leftContainer">
                      <div className="imgContainer">
                        <img src={d.icon} alt="" />
                      </div>
                      <h2>{d.title}</h2>
                      <p>{d.desc}</p>
                      <a><span>{d.link}</span></a>
                    </div>
                  </div>
                  <div className="right">
                    <img
                      src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <img
            src="image/arrow.png"
            className="arrow left"
            alt=""
            onClick={() => handleClick("left")}
          />
          <img
            src="image/arrow.png"
            className="arrow right"
            alt=""
            onClick={() => handleClick()}
          />
        </div>
      );
    }