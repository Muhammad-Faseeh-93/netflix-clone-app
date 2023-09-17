import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./components/context/AuthContext";
import Home from "./Page/Home";
import Login from "./Page/Login";
import Signup from "./Page/Signup";
import Account from "./Page/Account";
import ProtectedRoute from "./components/Protectedroute";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
