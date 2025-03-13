import "./About.css"; 
import  mobile from "./mobile.png" 
import iamge from "./image.png" ;
let About = ()=> {

    return (

        <div className="main3">
            <div className="about">
                <h2>ABOUT <span> APNEW </span> </h2>
                <img src={iamge}></img>
                <p>There are many variations of passages of Lorem Ipsum available, but the majorityhave suffered alteration in some form, by injected humour,available</p>
            </div>
            <div className="section">
                <div className="mobile">
                <img src={mobile}></img>
                </div>
                <div className="section-mini">
                <h3>BEST <span> APNEW </span> </h3>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master of human happiness. No one rejects, dislikes, <br></br>  <br></br>
                    mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the</p>               
             <div>
               <button className="btn1"> DOWNLOAD </button>  <br></br>
               <button className="btn2"> LEARN MORE </button>
             </div>
                </div>

            </div>
        </div>
    )
}
export default About