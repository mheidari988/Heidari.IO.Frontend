import React from "react";
import "./Loading.css";

function Loading(props) {
  return (
    <div className="loading">
      {props.isServerDown ? (
        <div>
          Oops! My server is taking a little coffee break. I've got my best
          hamsters on it, revving up the wheels. Check back in a bit! If the
          issue persists
          <p>feel free to reach out to me at reza@heidari.io</p>
        </div>
      ) : (
        <div id="load">
          <div>G</div>
          <div>N</div>
          <div>I</div>
          <div>D</div>
          <div>A</div>
          <div>O</div>
          <div>L</div>
        </div>
      )}
    </div>
  );
}

export default Loading;
