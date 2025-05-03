interface InputsProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  name: string;
}
const Inputs: React.FC<InputsProps> = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  className,
  error,
  name,
}) => {
  return (
    <>
      <div className="flex flex-col gap-2  ">
        <label className="text-sm font-medium text-gray-500 mt-2" htmlFor={id}>
          {label}
        </label>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className={`shadow-none border-none focus:outline-none  rounded-md bg-gray-100 border border-gray-200 text-gray-500 p-3 ${className}`}
          value={value}
          onChange={onChange}
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </>
  );
};

export default Inputs;
