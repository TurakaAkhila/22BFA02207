import React from "react";

function UrlTable({ urls, handleCopy, handleClick }) {
  if (urls.length === 0) {
    return <p>No URLs shortened yet.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Short URL</th>
          <th>Original URL</th>
          <th>Clicks</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {urls.map((item) => (
          <tr key={item.id}>
            <td>
              <a
                href={item.original}
                target="_blank"
                rel="noreferrer"
                onClick={() => handleClick(item.id)}
              >
                {item.short}
              </a>
            </td>
            <td className="truncate">{item.original}</td>
            <td>{item.clicks}</td>
            <td>
              <button onClick={() => handleCopy(item.short)}>Copy</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UrlTable;
