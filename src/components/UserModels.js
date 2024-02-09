import React, { useState, useEffect } from "react";
import "../css/DashboardStyles.css";

function UserModels({ username, onModelSelect }) {
  const [models, setModels] = useState([]);
  useEffect(() => {
    const fetchModels = async () => {
      if (username)
        try {
          const response = await fetch(
            `http://127.0.0.1:8000/predictor/users/${username}/models/`
          );
          const data = await response.json();
          setModels(data);
        } catch (error) {
          console.error("Failed to fetch models:", error);
        }
    };

    if (username) {
      fetchModels();
    }
  }, [username]);

  return (
    <div className="userModel">
      <h3 className="subText">User Name: {username}</h3>
      {models.length > 0 && (
        <table className="modelTable">
          <thead>
            <tr>
              <th>Model ID</th>
              <th>Model Name</th>
              <th>Modeling Date</th>
            </tr>
          </thead>
          <tbody>
            {models.map((model) => (
              <tr key={model.id} onClick={() => onModelSelect(model)}>
                <td>{model.id}</td>
                <td>{model.modelName}</td>
                <td>{model.modelingDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserModels;
