import { useState } from "react";

const EmployeeForm = ({ onSubmit, initialData = {} }) => {
  const [employee, setEmployee] = useState({
    name: initialData.name || "",
    position: initialData.position || "",
    department: initialData.department || "",
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(employee);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow">
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Position</label>
        <input
          type="text"
          name="position"
          value={employee.position}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Department</label>
        <input
          type="text"
          name="department"
          value={employee.department}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default EmployeeForm;
