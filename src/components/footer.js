import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsMailbox } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footerInfoCard">
      <ul className="footerTabs">
        <li className="footerItem">
          <a href="tracye.wilhelm@gmail.com" target="_blank" rel="noreferrer">
            <BsMailbox />
          </a>
        </li>
        <li className="footerItem">
          <a
            href="https://github.com/tracyewilhelm"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </li>
        <li className="footerItem">
          <a
            href="https://www.linkedin.com/in/tracye-wilhelm-8b93212a"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
        </li>
        <li className="footerItem">
          <BsPhone />
          (720) 280-8554
        </li>
      </ul>
    </div>
  );
}
