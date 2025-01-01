import "./App.css";
import HomePage from "./pages/client-page/homePage";
import AdminPage from "./pages/admin-page/admin-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/*" element={<AdminPage />}></Route>
          <Route path="/*" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
