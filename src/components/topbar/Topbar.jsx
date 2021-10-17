import "./topbar.scss"
import { Person, Mail, LinkedIn, GitHub} from "@material-ui/icons";




export default function Topbar({menuOpen, setMenuOpen}) {
  
        console.log(menuOpen)
    return (
        <div className= {`topbar ${menuOpen && "active"}`}>
            <div className="wrapper">
                <div className="left">
                   

                    <a href="#intro" className="logo">My Page.</a>
                    <div className="itemContainer">
                    <Person className="icon"/>
                    <span>+1 714-494-5680</span>
                    </div>

                    <div className="itemContainer">
                    <Mail className="icon"/>
                    <span>shanexian123@gmail.com</span>
                    </div>


                    <div className="itemContainer">
                    <a 
                    id = "linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/shane-xian-b67081158"><LinkedIn className="icon"/></a>
                    
                    </div>

                    <div className="itemContainer">
                    <a 
                    id = "github"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/ShaneVn"><GitHub className="icon"/></a>
                    
                    </div>


                    

                </div>
                

                <div className="right">
                    <div className="hamburger" onClick={()=>{setMenuOpen(!menuOpen)}}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>

                    </div>
                </div>
            </div>
        </div>
    )
}
