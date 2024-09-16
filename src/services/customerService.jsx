import axios from 'axios';

const API_URL = 'http://react-js-crud-with-laravel-api.test/api/customers';

const apiRequest = async (method, url, data = null) => {
    const response = await axios({ method, url, data });
    return response.data;
};

export const getCustomers = async () => {
    return await apiRequest('get', API_URL);
};

export const getCustomer = async (id) => {
    return await apiRequest('get', `${API_URL}/${id}`);
};

export const addCustomer = async (customer) => {
    return await apiRequest('post', API_URL, customer);
};

export const updateCustomer = async (id, customer) => {
    return await apiRequest('put', `${API_URL}/${id}`, customer);
};

export const deleteCustomer = async (id) => {
    return await apiRequest('delete', `${API_URL}/${id}`);
};