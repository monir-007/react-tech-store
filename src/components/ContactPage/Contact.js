import React from "react";
import Title from "../Title";

export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="contact us" />
          <form
            action="https://formspree.io/xeqrroog"
            className="mt-5"
            method="POST"
          >
            {/* first */}
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="ex: Abc Zha"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="ex@gmail.com"
              />
            </div>
            {/* subject */}
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="impotant"
              />
            </div>
            {/* message */}
            <div className="form">
              <textarea
                name="message"
                rows="10"
                className="form-control"
                placeholder="hello, write from here"
              ></textarea>
            </div>
            {/* */}
            <div className="form-group mt-3">
              <input
                type="submit"
                className="form-control bg-primary text-white"
                value="send"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
