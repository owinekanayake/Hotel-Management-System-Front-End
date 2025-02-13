import "./App.css";
import HomePage from "./pages/client-page/homePage";
import AdminPage from "./pages/admin-page/admin-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login-page/login";
import CategoriesPage from "./pages/admin/categories/adminCategories";
import TestComponent from "./pages/client-page/test";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Toaster/>
        <Routes>
          <Route path="/admin/*" element={<AdminPage />}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/categories"element={<CategoriesPage/>}></Route>
          <Route path="/test" element={<TestComponent></TestComponent>}></Route>
          <Route path="/*" element={<HomePage />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
