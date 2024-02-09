import React from "react";
import dashboardIcon from "../icons/dashboardIcon.svg";

function SideBar() {
  const styles = {
    sideBar: {
      backgroundColor: "#51585e",
      color: "white",
      width: "180px",
      height: "100vh",
    },
    list: {
      listStyleType: "none",
      padding: 0,
      margin: 0,
    },

    listItem: {
      display: "flex",
      alignItems: "center",
      padding: "20px",
      marginBottom: "10px",
      cursor: "pointer",
    },
    icon: {
      marginRight: "10px",
      width: "24px",
      height: "24px",
    },
    text: {
      fontSize: "18px",
      color: "white",
      padding: "5px",
    },
  };

  return (
    <div style={styles.sideBar}>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <img src={dashboardIcon} alt="Dashboard Icon" style={styles.icon} />
          <span style={styles.text}>Dashboard</span>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
