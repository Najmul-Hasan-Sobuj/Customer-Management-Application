// components/Navbar.js
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-white text-xl">Customer Management</h1>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/add-customer" className="text-white hover:text-gray-300">Add Customer</Link>
                    </li>
                    <li>
                        <Link to="/customers" className="text-white hover:text-gray-300">Customer List</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
