import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Employee Manager</h1>
        <ul className="flex gap-4">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/add-employee" className="hover:text-gray-300">
              Add Employee
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
