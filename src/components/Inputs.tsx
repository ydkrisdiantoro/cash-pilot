type InputProps = {
    label: string;
    error?: string;
    register?: any; // dari RHF, bisa diketik lebih ketat kalau mau
    name: string;
    required?: boolean;
};

export const InputText = ({ label, error, register, name, required }: InputProps) => (
    <div className="mb-3">
        <label className="block font-medium text-gray-700 mb-2" htmlFor={name}>{label}</label>
        <input
            id={name}
            type="text"
            {...(register ? register(name, { required }) : {})}
            className={`w-full py-2 px-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                error ? 'border-red-500' : 'border-gray-300'
            }`}
            autoComplete="autocomplete"
        />
        {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
);

export const InputPassword = ({label, error, register, name, required}: InputProps) => (
    <div className="mb-3">
        <label className="block font-medium text-gray-700 mb-2" htmlFor={name}>{label}</label>
        <input
            id={name}
            type="password"
            {...(register ? register(name, { required }) : {})}
            className={`w-full py-2 px-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                error ? 'border-red-500' : 'border-gray-300'
            }`}
            autoComplete="autocomplete"
        />
        {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
);