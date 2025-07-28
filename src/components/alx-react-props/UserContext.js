// File: src/App.js
import React, { createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';

// 1. Create UserContext
const UserContext = createContext();

// 2. App Component (Context Provider)
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

// 3. ProfilePage Component (No longer needs props)
function ProfilePage() {
  return (
    <div className="profile-page">
      <h2>User Profile</h2>
      <UserInfo />
    </div>
  );
}

// 4. UserInfo Component (No longer needs props)
function UserInfo() {
  return (
    <div className="user-info">
      <UserDetails />
    </div>
  );
}

// 5. UserDetails Component (Consumes Context)
function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div className="user-details">
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

// Render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
