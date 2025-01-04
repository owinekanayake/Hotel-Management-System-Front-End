import "./App.css";
import HomePage from "./pages/client-page/homePage";
import AdminPage from "./pages/admin-page/admin-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login-page/login";
import CategoriesPage from "./pages/client-page/categories";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/*" element={<AdminPage />}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="categories"element={<CategoriesPage/>}></Route>
          <Route path="/*" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
