type PropsType = {
  type?: 'text' | 'email' | 'password';
  name: string;
  label?: string;
  register: any;
  placeholder?: string;
};

export default function Input({
  type,
  name,
  label,
  register,
  placeholder,
}: PropsType): JSX.Element {
  return (
    <>
      <label htmlFor={label} className="left-2 transition-all bg-white px-1">
        {label}
      </label>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        {...register(name)}
        className="w-full form-input block border-2 border-gray-300 focus:border-purple-600 h-8"
      />
    </>
  );
}
