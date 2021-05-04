type PropsType = {
  type?: 'text' | 'email' | 'password';
  name: string;
  label?: string;
  register: any;
  placeholder?: string;
  errors?: {};
  options?: {};
};

export default function Input({
  type,
  name,
  label,
  register,
  placeholder,
  errors,
  options,
}: PropsType): JSX.Element {
  console.log({
    errors,
    name,
  });
  return (
    <>
      <label htmlFor={label} className="left-2 transition-all bg-white px-1">
        {label}
      </label>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        {...register(name, options)}
        className="w-full form-input block border-2 border-gray-300 focus:border-purple-600 h-8"
      />
      {errors && (
        <p className="text-sm text-red-500">{errors[name]?.message}</p>
      )}
    </>
  );
}
