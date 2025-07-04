import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>} />

                <Route element={<ProtectedRoute />}>
                    <Route path="/dashboard" element={<Dashboard/>} />
                </Route>
            </Routes>
        </Router>
    )
}
