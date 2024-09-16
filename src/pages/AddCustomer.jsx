// pages/AddCustomer.js
import { useState } from 'react';
import { addCustomer } from '../services/customerService';
import useForm from '../hooks/useForm';
import Button from '../components/Button';
import Input from '../components/Input';

const AddCustomer = () => {
    const { values, handleInputChange, errors, handleErrors, resetForm } = useForm({
        name: '',
        email: '',
        phone: ''
    });
    
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await addCustomer(values);
            resetForm();
            // Handle success (e.g., show notification)
        } catch (err) {
            if (err.response && err.response.data.errors) {
                handleErrors(err.response.data.errors);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
            <h1 className="text-2xl mb-4">Add New Customer</h1>
            
            <Input
                label="Name"
                name="name"
                value={values.name}
                onChange={handleInputChange}
                error={errors.name}
                placeholder="Enter customer name"
            />

            <Input
                label="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                error={errors.email}
                type="email"
                placeholder="Enter customer email"
            />

            <Input
                label="Phone"
                name="phone"
                value={values.phone}
                onChange={handleInputChange}
                error={errors.phone}
                placeholder="Enter customer phone"
            />

            <Button 
                type="submit" 
                text={loading ? 'Saving...' : 'Save Customer'} 
                className="w-full mt-4"
            />
        </form>
    );
};

export default AddCustomer;
