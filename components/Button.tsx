type PropsType = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  label?: string;
  className?: string;
};

export default function Button({
  type,
  onClick,
  label = 'BUTTON',
  className,
}: PropsType): JSX.Element {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        'py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700' +
        className
      }
    >
      {label}
    </button>
  );
}
