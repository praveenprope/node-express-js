import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/employees") // Replace with your backend URL
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error("Error fetching employees:", error));
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-6">Employee List</h2>
      {employees.length === 0 ? (
        <p className="text-gray-600">No employees found.</p>
      ) : (
        <ul className="space-y-4">
          {employees.map((employee) => (
            <li
              key={employee.id}
              className="p-4 bg-gray-100 rounded shadow flex justify-between items-center"
            >
              <div>
                <p className="font-bold text-lg">{employee.name}</p>
                <p className="text-gray-600">{employee.position}</p>
              </div>
              <Link
                to={`/employees/${employee.id}`}
                className="text-blue-500 hover:underline"
              >
                View Details
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;
