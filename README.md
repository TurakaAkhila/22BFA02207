React URL Shortener
A simple React-based URL Shortener Web App that allows users to shorten URLs, track click counts, and view an activity log.
This project is frontend‑only (no backend required) and uses an in‑memory store for shortened URLs.

🚀 Features
Shorten any valid URL (client-side).

Generate a unique short code for each URL.

Track the number of clicks for each shortened URL.

Copy shortened URL to clipboard with one click.

Activity logs for all user actions (using a custom logging middleware).

Clean and responsive UI.

📂 Project Structure
pgsql
Copy
Edit
frontend/
│── public/
│   └── index.html
│── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── utils/
│   │    └── Logger.js
│   ├── components/
│   │    ├── UrlForm.js
│   │    ├── UrlTable.js
│   │    └── Logs.js
│── package.json
🛠️ Tech Stack
React 18

UUID for generating unique short codes

Custom Logger Middleware (instead of console.log)

Plain CSS for styling

⚙️ Installation & Setup
Clone the repository

bash
Copy
Edit
git clone https://github.com/your-username/react-url-shortener.git
cd react-url-shortener/frontend
Install dependencies

bash
Copy
Edit
npm install
Run the application

bash
Copy
Edit
npm start
Open your browser and go to:

arduino
Copy
Edit
http://localhost:3000
📸 Screenshots
Home Page
Form to shorten URLs and see shortened results.

URL Table
Displays original URL, shortened URL, and click counts.

Logs Section
Shows a chronological list of user actions.

🧩 How It Works
Enter a long URL in the input field.

The app generates a short code (using UUID) and displays a shortened URL.

Clicking the short URL increases its click count.

Copy buttons allow quick copying to the clipboard.

The Activity Logs section records every action like:

URL shortened

Copied to clipboard

URL clicked

Validation errors

📝 Future Improvements
Add localStorage to persist URLs after page refresh.

Integrate with a Node.js backend for real short links.

Add user authentication for personal analytics.

Create a modern UI with Tailwind CSS or Material UI.

