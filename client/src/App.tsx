import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import { MainLayout } from "./layout/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/product/:id" element={<DetailPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
