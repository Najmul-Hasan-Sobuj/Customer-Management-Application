// pages/EditCustomer.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCustomer, updateCustomer } from '../services/customerService';
import Button from '../components/Button';
import Input from '../components/Input';

const EditCustomer = () => {
    const { id } = useParams(); // Get customer ID from the URL
    const navigate = useNavigate();
    const [customer, setCustomer] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [errors, setErrors] = useState({});

    // Fetch customer details when the component loads
    useEffect(() => {
        const loadCustomer = async () => {
            const data = await getCustomer(id);
            setCustomer(data); // Populate form fields with fetched data
        };

        loadCustomer();
    }, [id]);

    // Handle form input change
    const handleChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    };

    // Handle form submission for customer update
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateCustomer(id, customer);
            navigate('/customers'); // Redirect to the customer list after a successful update
        } catch (error) {
            setErrors(error.response.data.errors || {});
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Edit Customer</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    label="Name"
                    name="name"
                    value={customer.name}
                    onChange={handleChange}
                    error={errors.name}
                />
                <Input
                    label="Email"
                    name="email"
                    value={customer.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <Input
                    label="Phone"
                    name="phone"
                    value={customer.phone}
                    onChange={handleChange}
                    error={errors.phone}
                />
                <div className="flex justify-end">
                    <Button text="Update" className="bg-blue-500 hover:bg-blue-600" />
                </div>
            </form>
        </div>
    );
};

export default EditCustomer;
