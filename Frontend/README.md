Features
Home Page

Clean and responsive landing page

"Request a Callback" section for job seekers

Authentication

Login functionality via /login route

Authentication protected routes using JWT

Dashboard for Job Seekers

Upload and display profile photo

Multi-tab resume form with real-time validations

Create, Update, and Delete Resume functionality

Download resume as a styled PDF

Personalized user experience

🛠 Tech Stack
Tech	Description
React	UI library for building interactive interfaces
Vite	Fast build tool and development server
Redux Toolkit	State management with Redux simplified
Tailwind CSS	Utility-first CSS framework
DaisyUI	Prebuilt UI components for Tailwind
Axios	Promise-based HTTP client
React Router DOM	Routing between pages and dashboard
react-to-print	Export resume to PDF using printable component
Cloudinary	(via backend) Used for uploading profile images


Project Structure

src/
│
├── assets/              # Images and logos
├── components/          # Reusable UI components (Header, FormTabs, etc.)
├── features/            # Redux slices (userSlice, resumeSlice)
├── pages/               # Page components (Home, Login, Dashboard)
├── services/            # Axios API calls
├── styles/              # Tailwind + custom CSS (if any)
├── App.jsx              # Main app file with routes
├── main.jsx             # Entry point with Redux provider
└── ...
