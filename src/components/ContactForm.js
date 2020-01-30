import React, { useState, useRef } from "react";

export default function ContactForm(props) {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const { send, label, name, email, message } = props;
  let myForm = useRef(null);
  const onNameChange = e => {
    setInputName(e.target.value);
  };
  const onEmailChange = e => {
    setInputEmail(e.target.value);
  };
  const onMessChange = e => {
    setInputMessage(e.target.value);
  };

  const resetState = () => {
    setInputEmail("");
    setInputName("");
    setInputMessage("");
  };
  const handleSubmit = e => {
    e.preventDefault();
    alert("Messege Sent");
    myForm.current.reset();
    resetState();
  };

  return (
    <div className="contact-form">
      <div className="form-container">
        <form
          ref={myForm}
          onSubmit={handleSubmit}
          action="submit"
          className="form-wrapper"
        >
          <div className="form-title">
            <h1>
              {label}
              <span style={{ fontSize: "2.5rem", color: "#fdb813" }}>!</span>
            </h1>
          </div>
          <label htmlFor="name"></label>
          <input
            onChange={onNameChange}
            value={inputName}
            type="text"
            placeholder={name}
            className="name"
            required
          />
          <label className="error"></label>
          <label htmlFor="email"></label>
          <input
            onChange={onEmailChange}
            value={inputEmail}
            type="email"
            placeholder={email}
            className="email"
            required
          />
          <label className="error"></label>
          <label htmlFor="message"></label>
          <textarea
            onChange={onMessChange}
            value={inputMessage}
            placeholder={message}
            className="message"
            required
            style={{ height: "330px", resize: "none", fontSize: "1rem" }}
          />
          <label className="error"></label>
          <button className="cool-btn" type="submit" value={send}>
            {send}
          </button>
        </form>
      </div>
    </div>
  );
}
