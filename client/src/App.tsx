import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import { MainLayout } from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Form from "./pages/Form";
import Status from "./pages/Status";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/excemption-form" element={<Form />} />
          <Route path="/form-status" element={<Status />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
