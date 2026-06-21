import React, { useEffect, useState, createContext } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // localStorage.clear()
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("employees")) {
      setLocalStorage();
    }  

    const data = getLocalStorage();

    const rawEmployees = data?.employees || []
    const employeesWithCounts = rawEmployees.map((emp) => {
      const tasks = emp.tasks || []
      return {
        ...emp,
        taskCount: {
          new: tasks.filter((t) => t.newTask).length,
          active: tasks.filter((t) => t.active).length,
          completed: tasks.filter((t) => t.completed).length,
          failed: tasks.filter((t) => t.failed).length,
        },
      }
    })

    setUserData({
      employees: employeesWithCounts,
      admin: data?.admin || null,
    });
  }, []);

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;