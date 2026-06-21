import { useState, useContext } from "react";
import Login from "./components/Auth/Login.jsx";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import { AuthContext } from "./context/AuthProvider";
import { useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext);

useEffect(()=>{
  const loggedInUser = localStorage.getItem('loggedInUser')

  if (loggedInUser) {
    try {
      const userData = JSON.parse(loggedInUser)
      if (userData && typeof userData === 'object') {
        setUser(userData.role)
        setLoggedInUserData(userData.data)
      } else {
        // clear invalid value (e.g. the string "null")
        localStorage.removeItem('loggedInUser')
      }
    } catch (err) {
      // remove malformed stored data and treat as logged out
      localStorage.removeItem('loggedInUser')
    }
  }
}, [])

  const handleLogin = (email, password) => {
    if (!authData) {
      alert("Data not loaded yet, please wait and try again");
      return;
    }

    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: null })
      );
      return;
    }

    const employee = authData.employees.find(
      (e) => e.email === email && e.password === password
    );

    if (employee) {
      setUser("employee");
      setLoggedInUserData(employee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee })
      );
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedInUserData(null);
    localStorage.removeItem("loggedInUser");
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === "admin" && <AdminDashboard onLogout={handleLogout} />}

      {user === "employee" && (
        <EmployeeDashboard data={loggedInUserData} onLogout={handleLogout} />
      )}
    </>
  );
}

export default App;