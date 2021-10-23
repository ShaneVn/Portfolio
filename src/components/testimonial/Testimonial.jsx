import "./testimonial.scss";

export default function Testimonial() {
  const data = [
  

{
    id: 1,
  company: "Apple",
  title: "Metadata Curator",
  logo:
  "/image/Apple_logo_grey.png",
  icon: "/image/right-arrow.png",
  lineOne: "• Verify content accuracy",
  lineTwo: " • Make edits, fixes, or suggestions to the data content when needed",
  lineThree: "• Report any patterns of issues observed to help improve database and product performance",
  
  },

  {  id: 2,
    company: "Tesla",
    title: "Data Annotation Specialist",
    logo:
    "/image/Tesla.png",
    icon: "/image/right-arrow.png",
    lineOne: "•  Interact and assist Autopilot Engineers to provide high quality data",
    lineTwo: " • Work with a user interface for image and data labeling",
    lineThree: "• ensure that annotations meet project requirements and deliver high-quality data under deadline",
    feature: true,
    },

{
    id: 3,
    company: "San Jose State University",
    title: "Business Management",
    logo:
    "/image/SJSU.png",
    icon: "/image/right-arrow.png",
    lineOne:"  • Bachelor of Science",
    lineTwo: " • Graduated Fall 2018",
    
}
  ]


  return (
    
    <div className="testimonials" id="testimonials">
      <h1>Work & Education</h1>
      <div className="container">
      { data.map((d)=> (
        <div className={d.feature? "card feature" : "card"} key={d.id} >
          <div className="top">
            {/* <img 
              src= {d.icon}
              className="left"
              alt="left-arrow"
            /> */}
            <img 
            className = "logo"
            src={d.logo}alt="apple-logo" />
          </div>
          <div className="center">
            <h3>{d.title}</h3>
            <h4>{d.company}</h4>
            
          </div>
          <div className="bottom">
            <p class="des">
              {d.lineOne} 
            </p>
            <p>  {d.lineTwo}
             
            </p>
            <p> {d.lineThree}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );

  
    
}
