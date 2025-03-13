import "./footer.css"
import logo from "./image.png" ;
import "@fortawesome/fontawesome-free/css/all.min.css";
let Footer = ()=>{
return (
    <div className="footer"> 
    <div className="touch">
        <h3>
            GET <span> IN TOUCH </span></h3>
            <img src={logo}></img>
            <p>There are many variatons of passages of lorem avaible but the 
                majoritity have sufferd alteration in some form by injected humor , avaible
            </p>
    </div>
    <div className="contact">
        <div className="hello">
            <h4>Say hello!</h4>
            <div className="form">
                <input type="text" placeholder="Name"></input> <br></br> <br></br> 
                <input type="email" placeholder="Email"></input> <br></br> <br></br>
                <input type="text" placeholder="Message" style={{ height: "120px", textAlign : "top" ,  paddingBottom: "90px" }} />
                <br></br> <br></br>
                <button>Submit</button>
            </div>
        </div>
        
    </div>
<div className="subsribe">
    <div className="text">
    <h1>SUBSCRIBE FOR OUR NEWSLETTER</h1>
 <p>There are many variations of passages of Lorem Ipsum available,
but the majorityhave alteration in some form, by injected humour,available</p>
    </div>
    <div className="subform">
        <input type ="email" placeholder="Enter your email address"></input>
        <button>SUBSCRIBE</button>
    </div> 
    <div className="container">
      <div className="icons">
        {[
          "facebook-f",
          "twitter",
          "google",
          "linkedin-in",
          "pinterest",
          "youtube",
        ].map((icon, index) => (
          <a key={index} href="#" className="icon">
            <i className={`fab fa-${icon}`}></i>
          </a>
        ))}
      </div>
    </div>
</div>
    </div>
)
}
export default Footer
