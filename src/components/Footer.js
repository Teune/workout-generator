import React from 'react';
import githubLogo from "../assets/GitHub-Mark-Light-32px.png";

const Footer = () => {
    return (
      <div style={footerStyle}>
        <p style={{ paddingTop: "50px" }}>
          Nick Tchemitcheff
          <br />
          2019
          <br />
          <a href="https://github.com/usaspiff/workout-test-3">
            <img
              style={{ marginTop: "10px" }}
              src={githubLogo}
              alt="link to github"
            />
          </a>
        </p>
      </div>
    );
}

const footerStyle = {
  margin: "110px 0px 50px 0px",
  borderTop: "1px solid #e9eaec",
  display: "flex",
  textAlign: 'center',
  justifyContent: "center",
};

export default Footer;