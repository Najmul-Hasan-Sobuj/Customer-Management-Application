// components/Router.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCustomer from '../pages/AddCustomer';
import EditCustomer from '../pages/EditCustomer';
import CustomerList from '../pages/CustomerList';
import Navbar from './Navbar';

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <div className="container mx-auto p-6">
                <Routes>
                    <Route path="/add-customer" element={<AddCustomer />} />
                    <Route path="/edit-customer/:id" element={<EditCustomer />} />
                    <Route path="/customers" element={<CustomerList />} />
                </Routes>
            </div>
        </Router>
    );
};

export default AppRouter;
