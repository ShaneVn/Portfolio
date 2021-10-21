import "./testimonial.scss";

export default function Testimonial() {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Work History & Education</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            <img 
              src="/image/right-arrow.png"
              className="left"
              alt="left-arrow"
            />
            <img 
            className = "logo"
            src="/image/Apple_logo_grey.png" alt="apple-logo" />
          </div>
          <div className="center">
            <h3>Metadata Curator</h3>
            <h4>Apple</h4>
            
          </div>
          <div className="bottom">
            <p class="des">
              {" "}
              • Verify content accuracy, ensuring it meets the provided
              standards <br />
              <br />
              • Make edits, fixes, or suggestions to the data content when
              needed
              <br />
              <br />• Report any patterns of issues observed to help improve
              database and product performance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
