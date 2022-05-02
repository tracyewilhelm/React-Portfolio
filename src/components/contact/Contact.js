import React, { useState } from "react";
import validator from "validator";
import "./contact.css";

export default function Contact({ mode }) {
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Thank you for entering a valid email");
    } else {
      setEmailError("Please enter a valid email!");
    }
  };
  return (
    <div className={`contactContainer ${mode}`}>
      <div className="contactCard">
        <h2 id="contactMe">Contact Me or Leave a Message</h2>
        <div className="formCard">
          <form
            className={`contact textCard-${mode}`}
            action="mailto:tracye.wilhelm@gmail.com"
            method="post"
            encType="text/plain"
          >
            <div className="contact-form">
              <label for="name">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Tracye Wilhelm"
              />
            </div>

            <div className="form-group">
              <label for="email">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                onChange={(e) => validateEmail(e)}
              ></input>
              <br />
              <span style={{ color: "red" }}>{emailError}</span>
            </div>

            <div className="form-group">
              <label for="message">Message</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextArea1"
                placeholder="I would love to offer you a job!"
                rows="3"
              ></textarea>
            </div>
            <div>
              <button id="submitBtn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="formCard">
          <div className="contact">
            <div>
              <ul>
                <li>
                  <b>Email:</b> tracye.wilhelm@gmail.com
                </li>
                <li>
                  <b>GitHub: </b>
                  <a
                    href="https://github.com/tracyewilhelm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <b>LinkedIn: </b>
                  <a
                    href="https://www.linkedin.com/in/tracye-wilhelm-8b93212a"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <b>Phone:</b>(720) 280-8554
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
