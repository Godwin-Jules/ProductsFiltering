type Props = {
  value: string | number;
  title: string;
  name: string;
  color?: string;
  handleChange: (e: any) => void;
};

const Input = ({ value, title, name, color, handleChange }: Props) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

export default Input;
