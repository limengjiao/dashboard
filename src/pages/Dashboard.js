import React, { useState, useEffect } from "react";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import TitleBar from "../components/TitleBar";
import UserList from "../components/UserList";
import UserModels from "../components/UserModels";
import ModelDetails from "../components/ModelDetails";
import "../css/DashboardStyles.css";

function Dashboard() {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/predictor/users/");
        const data = await response.json();
        console.log("Fetched data:", data);
        setUserList(data);
      } catch (error) {
        console.error("Failed to fetch user list:", error);
      }
    };
    fetchUserList();
  }, []);

  return (
    <div className="dashboard">
      <div className="topSection">
        <TitleBar />
        <TopBar />
      </div>
      <div className="content">
        <SideBar />
        <div className="mainContent">
          <h1 className="title">Dashboard</h1>
          <div className="upperContent">
            <div className="subTitleBar">
              <h2 className="subTitleText">Users</h2>
            </div>
            <UserList users={userList} onUserSelect={setSelectedUser} />
          </div>
          <div className="lowerContent">
            <div className="lowerLeftContent">
              <div className="subTitleBar">
                <h2 className="subTitleText">User Models</h2>
              </div>
              {selectedUser && (
                <UserModels
                  username={selectedUser.username}
                  onModelSelect={setSelectedModel}
                />
              )}
            </div>
            <div className="lowerRightContent">
              <div className="subTitleBar">
                <h2 className="subTitleText">Model Details</h2>
              </div>
              {selectedModel && <ModelDetails id={selectedModel.id} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
