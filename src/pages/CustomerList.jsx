import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCustomers, deleteCustomer } from '../services/customerService';
import Button from '../components/Button';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    const loadCustomers = async () => {
        const data = await getCustomers();
        setCustomers(data);
    };

    useEffect(() => {
        loadCustomers();
    }, []);

    const handleDelete = async (id) => {
        await deleteCustomer(id);
        loadCustomers(); // Refresh the list after deletion
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-2xl mb-4">Customer List</h1>
            <ul className="space-y-4">
                {customers.map(customer => (
                    <li key={customer.id} className="p-4 bg-white rounded-lg shadow-md flex justify-between items-center">
                        <div>
                            <p><strong>{customer.name}</strong></p>
                            <p>{customer.email}</p>
                            <p>{customer.phone}</p>
                        </div>
                        <div className="space-x-4">
                            <Link to={`/edit-customer/${customer.id}`}>
                                <Button text="Edit" className="bg-green-500 hover:bg-green-600" />
                            </Link>
                            <Button 
                                text="Delete" 
                                onClick={() => handleDelete(customer.id)} 
                                className="bg-red-500 hover:bg-red-600"
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;
