import "./Main_section.css"
import phone from "./image.png"

function Main_section (){
    return (
        <div className="main2">
            <div className="first-section">
                <div className="head-para">
                <h1>  AWESOME 
                <span> APNEW </span> 
                  MOBILE  APP.
                </h1>
                <p>
                There are many variations of passages of Lorem Ipsum available, but the majorityhave suffered alteration in some form, by injected humour, or randomised words which don't look even There are many variations of passages of Lorem Ipsum available
                </p>
                </div>
                <div className="button">
                    <button> DOWNLOAD   </button>
                    <button> LEARN MORE </button>
                </div>
            </div>
            <div className="second-section">
                <img src={phone} alt="phone"></img>
            </div>
        </div>
    )
}
export default Main_section