import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />}></Route>
          <Route path="/home" element={<LandingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
