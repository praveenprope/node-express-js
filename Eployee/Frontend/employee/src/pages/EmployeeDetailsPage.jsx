import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const EmployeeDetailsPage = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/employees/${id}`) // Replace with your backend URL
      .then((response) => setEmployee(response.data))
      .catch((error) => console.error("Error fetching employee:", error));
  }, [id]);

  return (
    <div className="container mx-auto my-8">
      {employee ? (
        <div className="bg-white p-8 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">{employee.name}</h2>
          <p className="mb-2">
            <strong>Position:</strong> {employee.position}
          </p>
          <p>
            <strong>Department:</strong> {employee.department}
          </p>
        </div>
      ) : (
        <p className="text-gray-600">Loading employee details...</p>
      )}
    </div>
  );
};

export default EmployeeDetailsPage;
