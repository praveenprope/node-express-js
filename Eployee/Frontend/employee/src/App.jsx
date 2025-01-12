import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import EmployeeDetailsPage from "./pages/EmployeeDetailsPage";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/employees/:id/edit" element={<EditEmployee />} />
          <Route path="/employees/:id" element={<EmployeeDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
