import EmployeeForm from "../components/EmployeeForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navigate = useNavigate();

  const handleAddEmployee = (employee) => {
    axios
      .post("http://localhost:5000/api/employees", employee) // Replace with your backend URL
      .then(() => navigate("/"))
      .catch((error) => console.error("Error adding employee:", error));
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold mb-6">Add Employee</h1>
      <EmployeeForm onSubmit={handleAddEmployee} />
    </div>
  );
};

export default AddEmployee;
