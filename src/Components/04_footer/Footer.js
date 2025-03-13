import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "./image.png";

let Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        color: "white",
      }}
    >
      <div style={{ marginTop: "1%", width: "100%" }}>
        <h3 style={{ fontSize: "7vh" }}>GET <span>IN TOUCH</span></h3>
        <img src={logo} alt="Logo" />
        <p
          style={{
            fontSize: "medium",
            marginTop: "30px",
            textAlign: "center",
            marginLeft: "30%",
            width: "40%",
          }}
        >
          There are many variations of passages of lorem available but the
          majority have suffered alteration in some form by injected humor,
          available.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3%",
            gap: "20px",
          }}
        >
          <h4 style={{ fontSize: "5vh" }}>Say hello!</h4>
          <div style={{ width: "50%" }}>
            <input
              type="text"
              placeholder="Name"
              style={{
                border: "2px solid whitesmoke",
                background: "transparent",
                color: "white",
                padding: "10px 10px",
                width: "70%",
                textAlign: "start",
              }}
            />
            <br /><br />
            <input
              type="email"
              placeholder="Email"
              style={{
                border: "2px solid whitesmoke",
                background: "transparent",
                color: "white",
                padding: "10px 10px",
                width: "70%",
                textAlign: "start",
              }}
            />
            <br /><br />
            <input
              type="text"
              placeholder="Message"
              style={{
                height: "120px",
                textAlign: "top",
                paddingBottom: "90px",
                border: "2px solid whitesmoke",
                background: "transparent",
                color: "white",
                padding: "10px 10px",
                width: "70%",
                textAlign: "start",
              }}
            />
            <br /><br />
            <button
              style={{
                width: "50%",
                padding: "8px 5px",
                fontSize: "large",
                backgroundColor: "white",
                color: "black",
                border: "0px solid wheat",
                textAlign: "center",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "70vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "10%",
        }}
      >
        <div>
          <h1>SUBSCRIBE FOR OUR NEWSLETTER</h1>
          <p style={{ width: "50%", marginLeft: "25%", marginTop: "2%" }}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have alteration in some form, by injected humour,
            available.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginTop: "6%",
          }}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            style={{
              border: "2px solid white",
              background: "transparent",
              color: "white",
              padding: "20px 15px",
              width: "50%",
              borderRadius: "20px",
              textAlign: "start",
            }}
          />
          <button
            style={{
              width: "18%",
              padding: "15px 2px",
              borderRadius: "50px",
              fontSize: "medium",
              fontWeight: "bold",
              backgroundColor: "white",
              color: "black",
              border: "0px solid wheat",
              textAlign: "center",
              marginLeft: "10px",
              cursor: "pointer",
            }}
          >
            SUBSCRIBE
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#2c3e50",
          }}
        >
          <div style={{ display: "flex", gap: "15px" }}>
            {["facebook-f", "twitter", "google", "linkedin-in", "pinterest", "youtube"].map((icon, index) => (
              <a
                key={index}
                href="#"
                style={{
                  width: "50px",
                  height: "50px",
                  border: "2px solid white",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "20px",
                  color: "white",
                  textDecoration: "none",
                  transition: "0.3s",
                }}
                  >
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
