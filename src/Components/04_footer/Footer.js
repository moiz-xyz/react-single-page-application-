import "./footer.css"
import logo from "./image.png" ;
let Footer = ()=>{
return (
    <div className="footer"> 
    <div className="touch">
        <h3>
            GET IN TOUCH </h3>
            <img src={logo}></img>
            <p>There are mnay variatons of passages of lorem avaible but the 
                majoritity have sufferd alteration in some form by injected humor , avaible
            </p>
    </div>
    <div className="contact">
        <div className="hello">
            <h4>Say hello!</h4>
            <div className="form">
                <input type="text" placeholder="Name"></input>
                <input type="email" placeholder="Email"></input>
                <input type="text" placeholder="Message"></input>
                <button>Submit</button>
            </div>
        </div>
        <div className="contact_us">
            <div className="details">
                <p>
            +012 345 678 102
            +012 345 678 102
            </p>
            <p>
  mailto:support@devitems.com
   https://devitems.com/
   </p>
   <p>
  Dev Items address goes here,
 street,Crossroad123.
   </p>
            </div>
        </div>
    </div>
<div className="subsribe">
    <div className="text">
    <h5>SUBSCRIBE FOR OUR NEWSLETTER</h5>
 <p>There are many variations of passages of Lorem Ipsum available,
but the majorityhave alteration in some form, by injected humour,available</p>
    </div>
    <div className="subform">
        <input type ="email" placeholder="Enter your email address"></input>
        <button>SUBSCRIBE</button>
    </div>
    
</div>
    </div>
)
}
export default Footer
