import React from "react";

function RightSection({imageUrl,
  productName,
  productDescription,
  learnMore,
  margintop}) {
    return ( 
        <div className="container" style={{marginTop: margintop}}>
        <div className="row">
          <div className="col-lg-4 mt-5 mb-5">
            <h1 className="mb-4 fs-4 mt-5" >{productName}</h1>
            <p
              style={{
                lineHeight: "2",
                fontSize: "1.1rem",
                color: "#424242",
                fontWeight: '500'
              }}
            >
              {productDescription}
            </p>
            <a href={learnMore} className=" text-decoration-none fs-6"><b>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></b></a>
          </div>
          <div className="col-lg-7 offset-lg-1">
            <img src={imageUrl} className="img-fluid mb-5" />
          </div>
        </div>
      </div>
     );
}

export default RightSection;