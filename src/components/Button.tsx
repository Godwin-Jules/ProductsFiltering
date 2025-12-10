type Props = {
  onClickHandler: (e: any) => void;
  value?: string;
  title?: string;
};

const Button = ({ onClickHandler, value, title }: Props) => {
  return (
    <button onClick={onClickHandler} value={value} className="btns">
      {title}
    </button>
  );
};

export default Button;
