import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block my-5">
      <div className="row">
        {/*single column */}
        <div className="col-lg-2">
          <p className="text-uppercase">products</p>
        </div>
        {/* end of single columns */}
        {/*2nd column */}
        <div className="col-lg-2">
          <p className="text-uppercase">name of products</p>
        </div>
        {/* end of 2nd columns */}
        {/*3rd column */}
        <div className="col-lg-2">
          <p className="text-uppercase">price</p>
        </div>
        {/* end of 3rd columns */}
        {/*Fourth column */}
        <div className="col-lg-2">
          <p className="text-uppercase">quantity</p>
        </div>
        {/* end of Fourth columns */}
        {/*fifth column */}
        <div className="col-lg-2">
          <p className="text-uppercase">remove</p>
        </div>
        {/* end of fifth columns */}
        {/*sixth column */}
        <div className="col-lg-2">
          <p className="text-uppercase">total</p>
        </div>
        {/* end of sixth columns */}
      </div>
    </div>
  );
}
