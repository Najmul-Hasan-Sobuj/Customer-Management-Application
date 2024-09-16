// components/Input.js
const Input = ({ label, name, value, onChange, error }) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${
                    error ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default Input;
