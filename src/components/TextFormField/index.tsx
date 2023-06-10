import React from 'react';

type TextFormFieldProps = {
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    errors: any;
    register: any;
    message: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextFormField = (props: TextFormFieldProps) => {
    const { name, label, required, register, errors, message, type, placeholder, onChange } = props;

    return (
        <>
            <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor={`grid-${name}`}
            >
                {`${label} ${required ? '*' : ''}`}
            </label>
            <input
                {...register(name)}
                className={`appearance-none block w-full bg-[#112e42] text-white border-[3px] ${
                    errors ? 'border-red-500' : 'border-sky-500'
                } rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:shadow-sm focus:shadow-cyan-500
                `}
                id={`grid-${name}`}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />
            <p className="text-red-500 text-xs italic">{message}</p>
        </>
    );
};

export default TextFormField;
