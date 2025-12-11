import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const loginUser = (data) => {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
    };

    const logoutUser = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    const isAdmin = () => {
        if (!user) return false;
        const role = user.role || user.usuario?.role;
        return role && role.toUpperCase() === "ADMIN";
    };

    return (
        <AuthContext.Provider value={{ user, loginUser, logoutUser, isAdmin }}>
            {children}
        </AuthContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);