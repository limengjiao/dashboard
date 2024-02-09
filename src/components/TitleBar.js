import React from "react";

function TitleBar() {
  const styles = {
    titleBar: {
      backgroundColor: "#0277d1",
      width: "180px",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
    titleText: {
      color: "white",
      fontSize: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.titleBar}>
      <span style={styles.titleText}>ML Prediction</span>
    </div>
  );
}

export default TitleBar;
