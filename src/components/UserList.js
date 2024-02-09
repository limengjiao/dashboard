import React from "react";
import "../css/DashboardStyles.css";

function UserList({ users, onUserSelect }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Username</th>
          <th>Model Count</th>
          <th>Highest Score</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} onClick={() => onUserSelect(user)}>
            <td>{user.username}</td>
            <td>{user.model_count}</td>
            <td>
              {user.highest_score !== null
                ? `${(user.highest_score * 100).toFixed(0)}%`
                : "N/A"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default UserList;
