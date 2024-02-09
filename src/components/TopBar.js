import React from "react";
import avatarIcon from "../icons/avatar.png";

function TopBar() {
  const styles = {
    topBar: {
      backgroundColor: "#fff",
      color: "white",
      height: "60px",
      display: "flex",
      textAlign: "center",
      justifyContent: "flex-end",
      alignItems: "center",
      flexGrow: 1,
    },
    icon: {
      width: "24px",
      height: "24px",
    },
    title: {
      padding: "10px",
      marginRight: "20px",
      fontSize: "16px",
      textAlign: "right",
      color: "#000",
    },
  };

  return (
    <div style={styles.topBar}>
      <img src={avatarIcon} alt="Avatar Icon" style={styles.icon} />
      <p style={styles.title}>Admin 1</p>
    </div>
  );
}

export default TopBar;
