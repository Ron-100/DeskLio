import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ label, error, className = "", ...inputProps }, ref) => {
    return (
        <div className="w-full">
        {label && (
            <label className="block mb-1 text-sm font-medium text-gray-700">
            {label}
            </label>
        )}

        <input
            ref={ref}
            {...inputProps}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            error ? "border-red-500" : "border-gray-300"
            } ${className}`}
        />

        {error && (
            <p className="text-red-500 text-xs mt-1">{error}</p>
        )}
        </div>
    );
});

Input.displayName = "Input";

export default Input;