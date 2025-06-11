# 🌤️ Weather App

A full-stack weather application built with **Next.js** (App Router), **Node.js**, **Express**, and **MongoDB**. It fetches real-time weather data from the OpenWeather API and stores recent search history with pagination support.

---

## 🚀 Features

- Search for current weather by city  
- Displays temperature and description  
- Stores recent searches in MongoDB  
- Paginated and adjustable search history  
- Fully containerized with Docker  
- Accessible UI using Material UI  
- Graceful error handling for API limits and connectivity
- Unit test components and util functions

---

## 🧰 Tech Stack

- **Frontend:** Next.js (App Router), SCSS Modules, Material UI  
- **Backend:** Node.js, Express, MongoDB  
- **API:** OpenWeather API  
- **Testing:** Jest, React Testing Library  
- **DevOps:** Docker, Docker Compose

---

## ♿ Accessibility

- Semantic HTML and ARIA where needed
- Keyboard Navigation
- Labeled form inputs and controls
- Responsive layout with Material UI

---

## 🛠 Setup
- git clone https://github.com/vincentfullstack/weather-app.git
- cd weather-app
---

## Run the app with Docker 
- docker compose up --build

---

## URL on Dev
- Frontend: http://localhost:3000
- Backend: http://localhost:4000/history


---

## Run Unit Tests
- cd client
- npm test

---

## 📌 Notes

- .env files are usually excluded from Git, but intentionally included here for evaluation purposes so the app runs out-of-the-box.
- In a real-world project, sensitive .env files would be git-ignored and managed securely (e.g., via AWS Secrets Manager or GitHub Actions).
- Pagination is handled entirely on the frontend.
