import React from "react";
import SignUp from "./pages/Signup/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import { AlertProvider } from "./contexts/alertContext";
import Alert from "./components/Alert";
import Adoption from "./pages/Adoption/Adoption";
import Share from "./pages/Share/Share";
import UserProfile from "./pages/UserProfile/UserProfile";
import Pet from "./pages/Pet/Pet";

function App() {
  return (
    <AlertProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastrar" element={<SignUp />} />
            <Route path="/logar" element={<SignIn />} />
            <Route path="/adotar" element={<Adoption />} />
            <Route path="/divulgar" element={<Share />} />
            <Route path="/usuarios/:id" element={<UserProfile />} />
            <Route path="/pets/:id" element={<Pet />} />
          </Routes>
        </BrowserRouter>
        <Alert />
      </AuthProvider>
    </AlertProvider>
  );
}

export default App;
