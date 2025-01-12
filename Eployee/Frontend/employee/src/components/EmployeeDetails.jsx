const EmployeeDetails = ({ employee }) => {
    return (
      <div className="p-4">
        <h2 className="text-lg font-bold">Employee Details</h2>
        <p><strong>Name:</strong> {employee.name}</p>
        <p><strong>Position:</strong> {employee.position}</p>
        <p><strong>Department:</strong> {employee.department}</p>
      </div>
    );
  };
  
  export default EmployeeDetails;
  