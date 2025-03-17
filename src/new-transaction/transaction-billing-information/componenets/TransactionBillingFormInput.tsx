import React from "react";
import {Controller } from "react-hook-form";

interface InputProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control:any ;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   errors: any;
  placeholder: string;
  type?:any
}

const TransactionBillingFormInput: React.FC<InputProps> = ({ name, control, errors, placeholder,type='text' }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {placeholder}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            id={name}
            type={type}
            className="input w-full p-2 border rounded-md"
            placeholder={placeholder}
          />
        )}
      />
      {errors[name] && <p className="text-red-500 text-sm">{errors[name].message}</p>}
    </div>
  );
};

export default TransactionBillingFormInput;
