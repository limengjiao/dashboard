import React, { useState, useEffect } from "react";
import "../css/DashboardStyles.css";

function ModelDetails({ id }) {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const fetchModelDetails = async () => {
      if (id)
        try {
          const response = await fetch(
            `http://127.0.0.1:8000/predictor/models/${id}/details/`
          );
          const data = await response.json();
          setDetails(data);
        } catch (error) {
          console.error("Failed to fetch models:", error);
        }
    };

    if (id) {
      fetchModelDetails();
    }
  }, [id]);

  return (
    <div className="modelDetails">
      <h3 className="subText">Model ID: {id}</h3>
      <table className="detailsTable">
        <thead>
          <tr>
            <th>Model Score</th>
            <th>Training Data</th>
            <th>Scoring Data</th>
          </tr>
        </thead>
        <tbody>
          <tr key={details.id}>
            <td>
              {details.modelScore !== null
                ? `${(details.modelScore * 100).toFixed(0)}%`
                : "N/A"}
            </td>
            <td>{details.trainingCount}</td>
            <td>{details.scoringCount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ModelDetails;
