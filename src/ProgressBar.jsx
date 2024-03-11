import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar">
      <p>Progress: {progress}%</p>

      {/* inner gray pink progress bar */}
      <div
        style={{
          width: "100%",
          backgroundColor: "#444141",
          height: "15px",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      >
        {/* outer pink progress bar */}
        <div
          style={{
            width: `${progress}%`,
            backgroundColor: "#D478FF",
            height: "100%",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
