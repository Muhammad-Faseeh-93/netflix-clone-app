
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import { AuthContextProvider } from "./components/context/AuthContext";
import Login from "./Page/Login";
import Signup from "./Page/Signup";
import Account from "./Page/Account";


function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/account" element={<Account/>}/>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
