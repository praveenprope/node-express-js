import { useParams, useNavigate } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";
import { useEffect, useState } from "react";
import axios from "axios";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/employees/${id}`) // Replace with your backend URL
      .then((response) => setEmployee(response.data))
      .catch((error) => console.error("Error fetching employee:", error));
  }, [id]);

  const handleEditEmployee = (updatedEmployee) => {
    axios
      .put(`http://localhost:5000/api/employees/${id}`, updatedEmployee) // Replace with your backend URL
      .then(() => navigate("/"))
      .catch((error) => console.error("Error updating employee:", error));
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold mb-6">Edit Employee</h1>
      {employee && <EmployeeForm onSubmit={handleEditEmployee} initialData={employee} />}
    </div>
  );
};

export default EditEmployee;
