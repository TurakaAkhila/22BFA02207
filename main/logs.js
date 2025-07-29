import React from "react";

function Logs({ logs }) {
  if (logs.length === 0) {
    return <p>No logs yet.</p>;
  }

  return (
    <div className="logs">
      {logs.map((log, idx) => (
        <div key={idx} className="log-item">
          <strong>{log.timestamp}</strong> — <em>{log.action}</em>:{" "}
          {JSON.stringify(log.details)}
        </div>
      ))}
    </div>
  );
}

export default Logs;
