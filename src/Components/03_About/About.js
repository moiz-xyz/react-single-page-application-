import "./About.css";  
import iamge from "./image.png" ;
let About = ()=> {

    return (

        <div className="main3">
            <div className="about">
                <h2>ABOUT <span> APNEW </span> </h2>
                <img src={iamge}></img>
                <p>There are many variations of passages of Lorem Ipsum available, but the majorityhave suffered alteration in some form, by injected humour,available</p>
            </div>
        </div>
    )
}
export default About