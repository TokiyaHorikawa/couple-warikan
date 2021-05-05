type PropsType = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  label?: string;
  className?: string;
};

export default function ButtonSubmit({
  type,
  onClick,
  label = 'BUTTON',
}: PropsType): JSX.Element {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full py-2 px-2 rounded-lg text-white bg-purple-500 hover:bg-purple-300"
    >
      {label}
    </button>
  );
}
