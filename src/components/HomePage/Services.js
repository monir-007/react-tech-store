import React, { Component } from "react";
import styled from "styled-components";
import { FaDolly, FaRedo, FaDollarSign } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        id: 1,
        icon: <FaDolly />,
        title: "free shipping",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.Placeat dolore aperiam asperiores ipsum, magnam ea.",
      },
      {
        id: 2,
        icon: <FaRedo />,
        title: "30 days Return",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.Placeat dolore aperiam asperiores ipsum, magnam ea.",
      },
      {
        id: 3,
        icon: <FaDollarSign />,
        title: "secured payment",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.Placeat dolore aperiam asperiores ipsum, magnam ea.",
      },
    ],
  };

  render() {
    return (
      <ServicesWrapper className="py-5">
        <div className="container">
          <div className="row">
            {this.state.services.map((item) => {
              return (
                <div
                  className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3"
                  key={item.id}
                >
                  <div className="service-icon">{item.icon}</div>
                  <h5 className="mt-3 text-capitalize">{item.title}</h5>
                  <div className="mt-3">{item.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </ServicesWrapper>
    );
  }
}

const ServicesWrapper = styled.section`
  background: rgba(188, 238, 251, 0.6);

  .service-icon {
    font-size: 2.5rem;
    color: #21364b;
  }
  h4 {
    color: #20222e;
  }
  p {
    color: var(--darkGrey);
  }
`;
