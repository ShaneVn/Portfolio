import "./portfolio.scss"

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
           <h1>Portfolio</h1>
           <ul>
               <li className="active">Feature</li>
               <li>Web App</li>
               <li>Mobile App</li>
               <li>Desing</li>
               <li>Branding</li>
           </ul>
           
           <div className="container">
               <div className="item">
                  <a href="https://shanevn.github.io/react-netflix-clone/"
                   target="_blank"
                   rel="noreferrer"> <img src="/image/netflix-clone.jpg" alt="netflix-clone" /> </a>
                  <h3>netflix-clone</h3>
               </div>
               <div className="item">
                   <img src="/image/netflix-clone.jpg" alt="netflix-clone" />
                  <h3>netflix-clone</h3>
               </div>
               <div className="item">
                   <img src="/image/netflix-clone.jpg" alt="netflix-clone" />
                  <h3>netflix-clone</h3>
               </div>
               <div className="item">
                   <img src="/image/netflix-clone.jpg" alt="netflix-clone" />
                  <h3>netflix-clone</h3>
               </div>
               <div className="item">
                   <img src="/image/netflix-clone.jpg" alt="netflix-clone" />
                  <h3>netflix-clone</h3>
               </div>
               <div className="item">
                   <img src="/image/netflix-clone.jpg" alt="netflix-clone" />
                  <h3>netflix-clone</h3>
               </div>
           </div>
        </div>
    )
}
