import React, { useState } from "react";

export default function ContactForm(props) {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [status, setStatus] = useState("");

  const { error, success, send, label, name, email, message } = props;

  const onNameChange = e => {
    setInputName(e.target.value);
  };
  const onEmailChange = e => {
    setInputEmail(e.target.value);
  };
  const onMessChange = e => {
    setInputMessage(e.target.value);
  };


  const handleSubmit = ev => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  return (
    <div className="contact-form">
      <div className="form-container">
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/xzbrgpln"
          method="POST"
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
            name="name"
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
            name="_replyto"
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
          {status === "SUCCESS" ? (
            <div className="form-done">{success}</div>
          ) : (
              <button className="cool-btn" type="submit" value={send}>
                {send}
              </button>
            )}
          {status === "ERROR" && <div className="form-done">{error}</div>}
        </form>
      </div>
    </div>
  );
}
