/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from "react";
import PuffLoader from "react-spinners/PuffLoader";
import ClipLoader from "react-spinners/ClipLoader";

function Spinner2() {
  return (
    // eslint-disable-next-line react/style-prop-object
    <div className="contentWrap">
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <ClipLoader
          color="rgba(27, 23, 64, 1)"
          cssOverride={{}}
          loading
          size={50}
          speedMultiplier={1}
        />
      </div>
    </div>
  );
}

export default Spinner2;
