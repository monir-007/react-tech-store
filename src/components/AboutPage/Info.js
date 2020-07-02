import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              alt="about"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us" center />
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur, laudantium cupiditate atque hic earum aliquid
              laborum. Sit voluptate quod commodi!
            </p>
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur, laudantium cupiditate atque hic earum aliquid
              laborum. Sit voluptate quod commodi!
            </p>
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur, laudantium cupiditate atque hic earum aliquid
              laborum. Sit voluptate quod commodi!
            </p>
            <button
              className="main-link"
              type="button"
              style={{ marginTop: "2rem" }}
            >
              more info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
