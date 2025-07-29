import React from "react";

function UrlForm({ url, setUrl, shortenUrl }) {
  return (
    <form onSubmit={shortenUrl} className="url-form">
      <input
        type="text"
        placeholder="Enter a long URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit">Shorten</button>
    </form>
  );
}

export default UrlForm;
