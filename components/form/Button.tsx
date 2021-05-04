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
}: PropsType): JSX.Element {
  return (
    <button
      type={type}
      onClick={onClick}
      className="py-1 px-2 rounded-lg text-purple-500 border-2 border-purple-500 hover:bg-purple-500 hover:text-white"
    >
      {label}
    </button>
  );
}
