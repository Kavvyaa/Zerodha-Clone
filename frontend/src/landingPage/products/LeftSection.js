import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  appStore,
  googlePlay,
}) {
  return (
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-7 mt-5">
            <img src={imageUrl} className="img-fluid mt-5" alt="left section" />
          </div>
          <div className="col-lg-4 offset-lg-1" style={{marginTop:"150px"}}>
            <h1 className="mb-4 fs-3">{productName}</h1>
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
            <a href={tryDemo} className="p-2 text-decoration-none fs-6"><b>{tryDemo} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></b></a>
            <a href={learnMore} className="p-5 text-decoration-none fs-6"><b>{learnMore} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></b></a>
            <br />
            <a href={googlePlay} >
              <img src="Media/images/googlePlayBadge.svg" alt="google play" className="mt-4" width={'40%'} />
            </a>
            &nbsp; &nbsp;
            <a href={appStore}>
              <img src="Media/images/appstoreBadge.svg" alt="app store" className="mt-4 " width={'35%'}/>
            </a>
          </div>
        </div>
        <div className="row text-center text-muted">
        </div>
      </div>
  );
}

export default LeftSection;
