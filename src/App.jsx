import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import ErrorPage from "./pages/Error/404";
import LandingPage from "./pages/Landing";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
      <BrowserRouter>
      <Toaster />
        <Routes>
          <Route index element={<LandingPage />}></Route>
          <Route path="/home" element={<LandingPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
