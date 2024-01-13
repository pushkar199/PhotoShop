import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>
        <p>Made by Pushkar Thakur...</p>
        <p>
          ...Powered by{" "}
          <a target="_blank" href="https://www.pixabay.com">
            Pixabay Api
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
